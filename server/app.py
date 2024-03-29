#!/usr/bin/env python3

from flask import request, session,jsonify,make_response
from flask_restful import Resource

from .config import app, db, api
from .models import User,Car,Comment


    
class ClearSession(Resource):

    def delete(self):
    
        session['page_views'] = None
        session['user_id'] = None

        return {}, 204

class Signup(Resource):
    
     def post(self):

        username = request.get_json()['username']
        email =request.get_json()['email']
        password = request.get_json()['password']
        password_confirmation =request.get_json()['passwordConfirmation']
        
        if username and (password == password_confirmation):

            new_user = User(username=username ,email=email)
            new_user.password_hash = password
            db.session.add(new_user)
            db.session.commit()

            session['user_id'] = new_user.id

            return new_user.to_dict(), 201
        return {'error': '422: Unprocessable Entity'}, 422

class CheckSession(Resource):
    def get(self):
        if session.get('user_id'):
            user=User.query.filter(User.id == session['user_id']).first()

            return user.to_dict(), 200
        return {}, 404
        
class Login(Resource):
   def post(self):
        username = request.get_json()['username']
        
        password = request.get_json()['password']

        user = User.query.filter(User.username == username).first()

        if user.authenticate(password):
            session['user_id'] = user.id
            return user.to_dict(), 200

        return {'error': '401: Unauthorized'}, 401

class Logout(Resource):
        def delete(self):

            session['user_id'] = None
            

    
class CarsData(Resource):
    def get(self):
        cars =[car.to_dict() for car in Car.query.all()]
        response= make_response(
            jsonify(cars),
            200
        )
        
        return response
    def post(self):
        
        name = request.get_json()['name'] 
        type  = request.get_json()['type']
        model = request.get_json()['model']
        engine_number = request.get_json()['engine_number']
        millage = request.get_json()['millage']
        images = request.get_json()['images']
        engine_size = request.get_json()['engine_size']
        description = request.get_json()['description']
        fuel_type = request.get_json()['fuel_type']
        price = request.get_json()['price']

        if name is None or type  is None or model is None or engine_number is None or millage is None or images is None or engine_size is None or description is None or fuel_type is None or price is None :
            return make_response(jsonify({'errors': ['Missing required data']}), 400)
        
        new_car = Car(name=name,
                               type =type ,
                               model=model,
                               engine_number=engine_number,
                               millage=millage,
                               images=images,
                               engine_size=engine_size,
                               description=description,
                               fuel_type=fuel_type,
                               price=price
                               )

        
        db.session.add(new_car)
        db.session.commit()
        
        response_dict={
            'id':new_car.id,
            'name':new_car.name,
            'type ':new_car.type,
            'model':new_car.model,
            'engine_number':new_car.engine_number,
            'millage':new_car.millage,
            'images':new_car.images,
            'engine_size':new_car.engine_size,
            'description':new_car.description,
            'fuel_type':new_car.fuel_type,
            'price':new_car.price,

        }
        
        response = make_response(
            jsonify(response_dict),
            200
        )
        
        return response



class CarsFilter(Resource):
    def get(self,id):
        user =Car.query.filter_by(id=id).first()
        if user:

            respomse =make_response(
                jsonify(user.to_dict()),
                200
            )
            
            return respomse
        else:
            return {'message':'No match of id'}
        
    def patch(self,id):
        data = request.get_json()
        car =Car.query.filter_by(id=id).first()
        for attr in data:
            setattr(car, attr, data[attr])

        db.session.add(car)
        db.session.commit()

        response_dict = car.to_dict()

        response = make_response(
            jsonify(response_dict),
            200
        )

        return response

class CommentsData(Resource):
    def get(self):
        comments =[comment.to_dict() for comment in Comment.query.all()]
        response= make_response(
            jsonify(comments),
            200
        )
        
        return response
    
    def post(self):
        
        body = request.get_json()['body'] 
        car_id = request.get_json()['car_id']
        user_id = request.get_json()['user_id']

        if body is None or car_id is None or user_id is None:
            return make_response(jsonify({'errors': ['Missing required data']}), 400)
        
        new_comments = Comment(body=body, car_id=car_id, user_id=user_id)

        
        db.session.add(new_comments)
        db.session.commit()
        
        response_dict={
            'id':new_comments.id,
            'body':new_comments.body,
            'car_id':new_comments.car_id,
            'user_id':new_comments.user_id
        }

        

        response = make_response(
            jsonify(response_dict),
            200
        )
        
        return response


class CommentById(Resource):
   
   def delete(self,id):
        comment =Comment.query.filter_by(id=id).first()
       
        if not comment:
            return make_response(jsonify({'errors': ['Missing required data']}), 400)
        
        db.session.delete(comment)
        db.session.commit()
        
        response_dict = {}

        response = make_response(
            jsonify(response_dict),
            200
        )

        return response
    
    
api.add_resource(ClearSession, '/clear', endpoint='clear')
api.add_resource(Signup, '/signup', endpoint='signup')
api.add_resource(CheckSession, '/check_session',endpoint='check_session')
api.add_resource(Login, '/login', endpoint='login')
api.add_resource(Logout, '/logout', endpoint='logout')
api.add_resource(CarsData, '/cars', endpoint='cars')
api.add_resource(CarsFilter ,'/cars/<int:id>')
api.add_resource(CommentsData, '/comments')
api.add_resource(CommentById,'/comments/<int:id>')


if __name__ == '__main__':
    app.run(port=5555, debug=True)

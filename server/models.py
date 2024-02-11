from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import validates 
import re
from .config import db, bcrypt

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    email =db.Column(db.String, nullable=False)
    _password_hash = db.Column(db.String)
    created_at =db.Column(db.DateTime, server_default=db.func.now())


    cars =db.relationship("Comment", backref='users')
    

    serialize_rules = ('-cars.user',)
    
    
    @hybrid_property
    def password_hash(self):
        return self._password_hash


    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))
        
    @validates('email')    
    def validate_email(self, key, email):
        if not email:
            raise AssertionError('No email provided')
        if not re.match("[^@]+@[^@]+\.[^@]+", email):
            raise AssertionError('Provided email is not an email address') 
        return email 
     
    @validates('password')    
    def validate_password(self, key, password):
        if not password:
            raise AssertionError('No password provided')
        if not re.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$", password):
            raise AssertionError('Provide a password with a Lowercase letter, Uppercase letter, At least one special character') 
        return password 

    def __repr__(self):
        return f'User {self.username}, ID: {self.id}'


class Car(db.Model, SerializerMixin):
    
    __tablename__='cars'

    id =db.Column(db.Integer, primary_key=True)
    name =db.Column(db.String , nullable=False)
    type =db.Column(db.String , nullable=False)
    model =db.Column(db.String ,nullable=False)
    engine_number =db.Column(db.String , nullable=False)
    millage =db.Column(db.Integer, nullable=False)
    images =db.Column(db.String, nullable=False)
    engine_size =db.Column(db.String )
    description =db.Column(db.String)
    fuel_type =db.Column(db.String )
    price =db.Column(db.Integer)
    created_at =db.Column(db.DateTime, server_default=db.func.now())
    
    cars =db.relationship("Comment", backref='cars')
    serialize_rules = ('-comments.cars','-cars')
    
    # @validates('price')
    # def validate_pice(self,key,price):
    #     if not price:
    #         raise AssertionError("Enter price")
    #     if not  price  1000000:
    #         raise AssertionError("Enter price below 10,000,000")    



class Comment(db.Model, SerializerMixin):
    __tablename__='comments'
    
    id =db.Column(db.Integer, primary_key=True)
    body =db.Column(db.String)
    car_id =db.Column(db.Integer, db.ForeignKey('cars.id'))
    user_id =db.Column(db.Integer, db.ForeignKey('users.id'))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    
    serialize_rules = ('-cars','-users')
    
    @validates('body')
    def validate_comment(self,key,body):
        if not  len(body) >= 15:
            raise AssertionError("Enter comment above ")
        return body
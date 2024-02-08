from config import db,app  # Assuming your models are in an app package
from models import User, Car, Comment  # Import model classes
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
engine = create_engine('sqlite:///instance/app.db')
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


with app.app_context():  # Create an application context
    # Delete existing data (if needed)
    with db.session.begin():
        db.session.query(Car).delete()
        db.session.query(Comment).delete()
        db.session.query(User).delete()  # Delete users last (due to foreign keys)

    # Create sample users
    user1 = User(username="johndoe", password_hash="securepassword" ,email="johndoe@user.com")
    user2 = User(username="janesmith", password_hash="anotherpassword", email="janesmith@user.com")

    # Create sample cars
    car1 = Car(name="Toyota Camry",price=10000000, fuel_type='Unleaded Petrol' ,description='2.0L, 4 SPEED AUTOMATIC,color Red, 1990',engine_size='2000 cc',type="Sedan", model="1990", engine_number="123456", millage=25000, images="https://images.pexels.com/photos/205337/pexels-photo-205337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    car2 = Car(name="Honda Accord",price=10000000, fuel_type='Petrol' ,description='2.0L',engine_size='1000 cc', type="Sedan", model="2023", engine_number="789012", millage=10000, images="https://images.pexels.com/photos/16350076/pexels-photo-16350076/free-photo-of-black-honda-accord.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    car3 = Car(name="Ford Mustang",price=10000000, fuel_type='Petrol' ,description='Yellow, 5.0L, 10 SPEED AUTOMATIC ',engine_size='5000 cc', type="Sports", model="2022", engine_number="345678", millage=5000, images="https://images.pexels.com/photos/9334968/pexels-photo-9334968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    car4 = Car(name="Lexus  IS",price=10000000, fuel_type='Petrol' ,description='2.0L, White,5 SPEED AUTOMATIC',engine_size='200 cc', type="Sedan", model="2024", engine_number="456789", millage=8000, images="https://images.pexels.com/photos/376674/pexels-photo-376674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    car5 = Car(name="Chevrolet Malibu",price=10000000,  fuel_type='Diesel' ,description='2.0L, Red, MANUAL',engine_size='900 cc',type="Sedan", model="2022", engine_number="901234", millage=15000, images="https://images.pexels.com/photos/5066933/pexels-photo-5066933.jpeg?auto=compress&cs=tinysrgb&w=600")
    car6 = Car(name="Hyundai Sonata",price=10000000,  fuel_type='Petrol' ,description='3.0L White, 5 SPEED AUTOMATIC',engine_size='200 cc',type="Sedan", model="2023", engine_number="567890", millage=18000, images="https://images.pexels.com/photos/11194510/pexels-photo-11194510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    car7 = Car(name="Volkswagen Jetta",price=10000000,  fuel_type='Petrol' ,description='2.0L Black 5 SPEED MANUAL',engine_size='300 cc',type="Sedan", model="2021", engine_number="123450", millage=22000, images="https://images.pexels.com/photos/17177680/pexels-photo-17177680/free-photo-of-a-black-car-with-a-roof-rack-parked-on-the-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    car8 = Car(name="Kia K5",price=10000000, fuel_type='Electric' ,description='2.0L Dark Grey, 5 SPEED ELECTRIC',engine_size='1200 cc', type="Sedan", model="2024", engine_number="012345", millage=3000, images="https://images.pexels.com/photos/13163937/pexels-photo-13163937.png?auto=compress&cs=tinysrgb&w=600")
    car9 = Car(name="Mazda3",price=10000000,  fuel_type='Petrol' ,description='1.6L RED, 6 SPEED AUTOMATIC ',engine_size='600 cc',type="Sedan", model="2022", engine_number="678901", millage=12000, images="https://images.pexels.com/photos/17244545/pexels-photo-17244545/free-photo-of-red-mazda-3-on-street.jpeg?auto=compress&cs=tinysrgb&w=600")
    car10 = Car(name="Toyota Land Cruiser",price=10000000, fuel_type='Diesel' ,description='4.8L, Black, 8 SPEED AUTOMATIC',engine_size='4800 cc', type="SUV", model="2023", engine_number="345012", millage=20000, images="https://images.pexels.com/photos/18847999/pexels-photo-18847999/free-photo-of-toyota-land-cruiser-on-a-seaside-cliff.jpeg?auto=compress&cs=tinysrgb&w=600")
    car11 = Car(name="Honda CR-V",price=10000000, fuel_type='Petrol' ,description='3.0L',engine_size='1500 cc', type="SUV", model="2022", engine_number="789034", millage=16000, images="https://images.pexels.com/photos/6794815/pexels-photo-6794815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1e")
    car12 = Car(name="Subaru Forester",price=10000000, fuel_type='Petrol' ,description='2.5L, White ,^ SPEED MANUAL',engine_size='1200 cc', type="SUV", model="2021", engine_number="501234", millage=25000, images="https://images.pexels.com/photos/3778763/pexels-photo-3778763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    car13 = Car(name="Jeep Wrangler",price=10000000, fuel_type='Diesel' ,description='3.0L, SILVER, 5 SPEED AUTOMATIC',engine_size='2000 cc', type="SUV", model="2024", engine_number="903456", millage=8000, images="https://images.pexels.com/photos/11229044/pexels-photo-11229044.jpeg?auto=compress&cs=tinysrgb&w=600")
    car14 = Car(name="Kia Telluride",price=10000000,  fuel_type='Petrol' ,description='2.0L , Blue ,6 SPEED AUTOMATIC,',engine_size='700 cc',type="SUV", model="2023", engine_number="123056", millage=10000, images="https://images.pexels.com/photos/13061032/pexels-photo-13061032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    car15 = Car(name="Hyundai XRT",price=10000000,  fuel_type='Electric' ,description='Electric',engine_size='330 cc',type="SUV", model="2023", engine_number="345601", millage=20000, images="https://images.pexels.com/photos/18184408/pexels-photo-18184408/free-photo-of-the-hyundai-santa-fe-xrt-concept-parked-in-a-canyon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    car16 = Car(name="Lexus ES",price=10000000,  fuel_type='Disel' ,description='5.0L, Red, 8 SPEED AUTOMATIC',engine_size='1000 cc',type="Luxury Car", model="2024", engine_number="901234", millage=8000, images="https://images.pexels.com/photos/2684218/pexels-photo-2684218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    car17 = Car(name="Ferrari 812 superfast",price=10000000, fuel_type='Petrol' ,description='6.5L, Black, 8 SPEED AUTOMATIC',engine_size='700 cc', type="Sports Car", model="2022", engine_number="567890", millage=5000, images="https://images.pexels.com/photos/17855577/pexels-photo-17855577/free-photo-of-ferrari-812-gts.jpeg?auto=compress&cs=tinysrgb&w=600")
    car18 = Car(name="Volkswagen ID.4",price=10000000, fuel_type='Petrol' ,description='2.0L',engine_size='1500 cc', type="Electric Car", model="2024", engine_number="123098", millage=3000, images="https://images.pexels.com/photos/131811/pexels-photo-131811.jpeg?auto=compress&cs=tinysrgb&w=600")

    # Create sample comments with associated cars and users
    comment1 = Comment(body="Great car, smooth ride!", cars=car1, users=user1)
    comment2 = Comment(body="Love the new features in this model.", cars=car2, users=user2)
    comment3 = Comment(body="Powerful engine and sporty handling.", cars=car3, users=user1)

    # Add objects to the session and commit changes
    db.session.add_all([user1, user2, car1, car2, car3,car4,car5,car6,car7,car8,car9,car10,car12,car13,car14,car15,car16,car17,car18, comment1, comment2, comment3])
    db.session.commit()

    print("Seeding completed successfully!")

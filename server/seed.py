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
    user1 = User(username="johndoe", password_hash="securepassword")
    user2 = User(username="janesmith", password_hash="anotherpassword")

    # Create sample cars
    car1 = Car(name="Toyota Camry", type="Sedan", model="2020", engine_number="123456", millage=25000, images="https://example.com/camry.jpg")
    car2 = Car(name="Honda Accord", type="Sedan", model="2023", engine_number="789012", millage=10000, images="https://example.com/accord.jpg")
    car3 = Car(name="Ford Mustang", type="Sports", model="2022", engine_number="345678", millage=5000, images="https://example.com/mustang.jpg")

    # Create sample comments with associated cars and users
    comment1 = Comment(body="Great car, smooth ride!", cars=car1, users=user1)
    comment2 = Comment(body="Love the new features in this model.", cars=car2, users=user2)
    comment3 = Comment(body="Powerful engine and sporty handling.", cars=car3, users=user1)

    # Add objects to the session and commit changes
    db.session.add_all([user1, user2, car1, car2, car3, comment1, comment2, comment3])
    db.session.commit()

    print("Seeding completed successfully!")

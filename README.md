# Car-dealers
## Setup

To download the dependencies for the frontend and backend, run:

```sh
pipenv install
npm install --prefix client
```

There is some starter code in the `app/seed.py` file so that once you've
generated the models, you'll be able to create data to test your application.

You can run your Flask API on [`localhost:5555`](http://localhost:5555) by running:

```sh
python app.py
```

You can run your React app on [`localhost:4000`](http://localhost:4000) by running:

```sh
npm start --prefix client
```

## Models

You need to create the following relationships:

- A `User` has many `comments`s through `cars`
- A `car` has many `comments`s through `user`
- A `comment` belongs to a `user` and belongs to a `car`

[ERD](https://dbdiagram.io/d/Car-dealers-65c0e92cac844320ae7a0fd1)
Start by creating the models and migrations for the following database tables:

Add any code needed in the model files to establish the relationships.

Then, run the migrations and seed file:

```bash
    flask db upgrade

```

```bash
    python db/seed.py
```

## Routes

Set up the following routes. Make sure to return JSON data in the format
specified along with the appropriate HTTP verb.

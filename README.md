# Car Dealer 
 This project is a project proposed to making a platform whereby it allows for users to; browse, search and select vehicles. The website website incorporates a React frontend and a Flask API backend.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Start the development server by running `npm start`.
5. Open your web browser.
 
## How to use
-Login/sign up
-vehicles should be displayed. There is also an option to search.
-Once you select a vehicle, you should be able to see the selected image enter its own page and show more information.
- You are able to comment
- There is also a function to allow you to add car
- Once done, you are allowed to Log out with the log out button
-You are also able to move between pages such as the home page and the about page.

## Features

### 1. Home Page

- The home page welcomes users and prompts them to log in or sign up to access the full functionality of the website.
- Users who are logged in can view a list of available cars and perform searches to find specific vehicles.

### 2. About Page

- The about page provides information about the car dealership, its mission, and the types of vehicles available.
- It aims to give users an overview of the dealership's values and commitment to customer service.

### 3. Add Car Page

- The add car page allows authenticated users to add new cars to the inventory.
- Users can enter details such as the car's name, type, model, engine number, mileage, images, engine size, description, fuel type, and price.
- Upon submission, the new car details are sent to the server to be stored in the database.

### 4. Each Car Page

- Clicking on a specific car from the inventory list redirects the user to the individual car page.
- Users can view detailed information about the selected car, including its name, type, description, model, fuel type, mileage, engine size, and price.
-  Users can also leave comments on the car, sharing their thoughts and opinions.

### 5. Sign Up Page

- The sign-up page allows new users to create an account with the website.
- Users need to provide a username, email address, password, and password confirmation to register.
- Upon successful registration, users are logged in automatically and redirected to the home page.

### 6. Login Page

- The login page enables existing users to log in to their accounts.
- Users need to enter their username and password to access their account.
- Upon successful login, users are redirected to the home page.

### 7. Navbar

- The navigation bar provides links to different sections of the website, including the home page, about page, and add car page.
- For authenticated users, additional links for logging out are displayed in the navigation bar.

### 8. Search Functionality

- Users can search for specific cars using the search bar on the home page.
- The search functionality filters cars based on the entered search term, displaying only the matching results.
-  Note that the vehicles displayed are the ones that are available in the database otherwise there will be an error displaying no car found.
### 9. Theme Switcher

- The theme switcher allows users to change the website's theme between light and dark modes.


### 10. Footer

- The footer section provides contact information for the car dealership, including phone number and email address.
- It also includes links to the dealership's social media profiles on Facebook, Twitter, and Instagram.
- Additionally, the footer displays the copyright notice for the website.

## Technologies Used

- **React.js:** The frontend of the website is built using React.js.
- **React Router:** allows for navigation between different pages.
- **Fetch API:** The Fetch API is used to make HTTP requests to the server to fetch and send data.
- **CSS:** Used for the styling

## Contributors

Dennis Irungu- https://github.com/irungudennisnganga
Tyrese Mugo- https://github.com/TyreseMugo

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
<img src="./readme/title1.svg"/>

<br><br>

<!-- project philosophy -->
<img src="./readme/title2.svg"/>

> The project philosophy is centered around developing a mobile app that integrates OpenAI technology to enhance the financial well-being of users.
>
> This app aims to make it simple and convenient for individuals to manage their finances, empowering them to make informed decisions with the assistance of AI-based financial advisors. Ultimately, the goal is to help users achieve better financial outcomes without sacrificing the convenience and ease of use they have come to expect from modern mobile applications.

### User Stories

-   As a user, I want to be able to create multiple wallets, so that I can segregate my business finances from my personal finances.
-   As a user, I want the option to select an AI-powered financial advisor to help me make informed financial decisions.
-   As a user, I want to be able to specify my recurring expenses and incomes, so that I don't have to manually input them every time they occur.
-   As a user, I want to be able to categorize each expense or income record that I insert into the system.
-   As a user, I want to be able to access an AI-based financial advisor each time I record an expense in a wallet. 
-   As a user, I want to be able to track my incomes and expenses by date, so that I can have a clear picture of my financial transactions on any given day.
-   As a user, I want to be able to add financial goals to my financial profile, so that I can receive personalized financial advice from the AI advisor that takes into account my long-term financial objectives.
-   As a user, I want to be able to add budgets to my financial profile, so that I can receive personalized financial advice from the AI advisor that takes into account my spending habits and financial goals.


### Admin Stories

-   As an admin, I want to be able to delete a user's account, so that I can maintain the integrity and safety of the platform by removing users.
-   As an admin, I want to be able to update user information, so that I can assist users in case they need help with updating their account details.
-   As an admin, I want to be able to assign admin privileges to other users, so that I can delegate administrative tasks and ensure a smooth operation .
    <br><br>

<!-- Prototyping -->
<img src="./readme/title3.svg"/>

> We designed Wallii using wireframes and mockups, iterating on the design until we reached the ideal layout for easy navigation and a seamless user experience.

### Wireframes
| Wallets WireFrame                             | Advisor WireFrame                              | Transactions WireFrame                               | Login WireFrame                                      |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| ![Welcome](./readme/wireframes/landing.png) | ![Advisor](./readme/wireframes/register1.png) | ![SignUp1](./readme/wireframes/wallet.png) | ![SignUp2](./readme/wireframes/login.png) |

### Mockups
| Welcome Mockup                             | Login Mockup                              | Expense Mockup                               | Wallet Mockup                                      |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| ![Welcome](./readme/implementation/mockupwelcome.png) | ![Advisor](./readme/implementation/mockuplogin.png) | ![SignUp1](./readme/implementation/mockupadd.png) | ![SignUp2](./readme/implementation/mockuowallet.png) |


<br><br>

<!-- Implementation -->
<img src="./readme/title4.svg"/>

> Using the wireframes and mockups as a guide, we implemented the Wallii app with the following features:


### UX Demo:
| Welcome stack                                      | login and expense                                     | wallet options                                  | advisor demo                                          |
| --------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------ | ----------------------------------------------------- |
| ![Landing](./readme/gifs/signup-login.gif)     | ![fsdaf](./readme/gifs/login-trim.gif)      | ![fsdaf](./readme/gifs/bottom-tab.gif)   | ![fsdaf](./readme/gifs/rejected-expense.gif)           |


### User Screens 

| Welcome screen                                      | Advisor screen                                     | Register screen                                  | Login screen                                          |
| --------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------ | ----------------------------------------------------- |
| ![Landing](./readme/implementation/welcome.PNG)     | ![fsdaf](./readme/implementation/advisor.PNG)      | ![fsdaf](./readme/implementation/register.PNG)   | ![fsdaf](./readme/implementation/login.PNG)           |
| Home screen                                         | Wallet Screen                                      | Update Screen                                    | Expense Screen                                        |
| ![Landing](./readme/implementation/home.PNG)        | ![fsdaf](./readme/implementation/wallet.PNG)       | ![fsdaf](./readme/implementation/add_income.PNG) | ![fsdaf](./readme/implementation/add_expense.PNG)     |
| Advisor screen                                      | Advisor Screen                                     | Calender Screen                                  | Calender Screen                                       |
| ![Landing](./readme/implementation/bad_advisor.jpg) | ![fsdaf](./readme/implementation/good_advisor.PNG) | ![fsdaf](./readme/implementation/calender1.PNG)  | ![fsdaf](./readme/implementation/calender2.PNG)       |
| Budget screen                                       | Goals Screen                                       | Admin Screen                                     | Wallet settings Screen                                |
| ![Landing](./readme/implementation/Budget.PNG)      | ![fsdaf](./readme/implementation/goals.PNG)        | ![fsdaf](./readme/implementation/admin.PNG)      | ![fsdaf](./readme/implementation/Wallet_settings.PNG) |


<br><br>
<!-- Tech stack -->
<img src="./readme/title5.svg"/>



### Wallii is built using the following technologies:

-   🚨 The Wallii app is built using a stack that includes Node.js, Express, and MongoDB for the backend and React Native for the frontend.
-   For the user interface design, the app uses the material design principles for a clean and intuitive user experience.
-   The app features custom animations and transitions to enhance the user experience and make it feel more fluid and natural.
-    To facilitate seamless communication between the frontend and backend, the app uses RESTful APIs and JSON data exchange formats.
-   Wallii offers robust security features to protect user data and ensure the privacy of their information.
-   The app features a powerful search functionality that allows users to easily find what they're looking for within the app's content.
-   Wallii offers a range of customization options, allowing users to personalize their experience and tailor the app to their preferences.

<br><br>

<!-- How to run -->
<img src="./readme/title6.svg"/>

> To set up Wallii locally, follow these steps:

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

-   Download and install from https://nodejs.org/en/download/

-   npm
    ```sh
    npm install -g expo-cli
    ```

### Installation


1.  Get a free API Key for OpenAI at https://openAi.com
2.  Clone the repo
    ```sh
    git clone https://github.com/hassan-bachir/Wallii/
    ```
3.  Install NPM packages
    ```sh
    cd /wallii_server
    npm install
    cd /aiwallet_mobile
    npm install

        ```

4.  Enter your API in `config.js`
    ```js
    const API_KEY = "ENTER YOUR API";
    ```
5.  Set up your MongoDB database by following the instructions at https://www.mongodb.com/ and update the database connection string in the backend/config/db.js file
    ```js
    const CONNECTION_STRING = "ENTER YOUR MONGODB CONNECTION STRING";
    ```
6.  initialize App

    ````js
    //mobile
    npm start
    //server
    nodemon index.js
    ````

Now, you should be able to run Wallii locally and explore its features.


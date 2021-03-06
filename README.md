[![LinkedIn][linkedin-shield]][linkedin-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://inmywallet.herokuapp.com/">
    <img src="images/logo.png" alt="Logo" width="700" height="450">
  </a>

  <h3 align="center">In My Wallet App</h3>

  <p align="center">
   An Expenditure Accountability App
    <br />
    <a href="https://inmywallet.herokuapp.com/">React Web App (Heroku)</a>
  <br/>
    <a href="https://inmywallet.netlify.app/">Static Web App (Netlify)</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-app">About The App</a>
      <ul>
        <li><a href="#Tech-Stack">Technology Stack</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The App
I decided to create a simple tracker to track my expenses as i'm starting to lose track of my spendings. This app is straightforward, nothing fancy and serves it deep purpose of being a tracker. 

My idea behind this:
* Your time should be focused on creating something amazing. A project that solves a problem and helps others (including myself)
* Simple minimalistic UI design to be straightforward as possible.
* Utilised a Web application in order to serve people who are not familiar with utilising an App store (Older Gen) to download applications. 
* Can be used on all mobile platforms including the common Android OS and iOS

# Project UI
![](images/UIDesign.jpg) 


# Live Demo 
      
## Adding the Web Application to your Homescreen.     
### (iOS 14.5 - iPhone 12 Pro Max)
![](images/MainDemo.gif) 

## Hot Reloading support shown in both Browser and Application
### (iOS 14.5 - iPhone 12 Pro Max)
![](images/MainDemo2.gif) 

## On Netlify 
### (iOS 14.5 - iPhone 12 Pro Max)
Netlify Version: <a href="https://inmywallet.netlify.app">Try me!</a>

![](images/netlifyFinal.gif) 

## Adding the Web Application to your Homescreen.     
### (Android 11.0 - Pixel 4)
![](images/android.gif)



## Web App

The webapp comes with a backend server and a database to store the data. However, the web app has no authentication features to identify the individual who is using the app. This means that anyone can see your data being uploaded into the wallet app. 
Hence, if you are planning to use this app subjectively, do use the static web uploaded onto netlify 
<a href="https://inmywallet.netlify.app">((click here!))</a> 
as the data will be stored in your own browser storage and can be used personally.

The react web app was made to enhance the static web app into a react web app. Just for experience purposes.

## Tech Stack
Some of the technologies used in the development of this web application are as follow:
### Frontend
* [HTML](https://devdocs.io/html/) - A markup language to display material retrieved over the net.
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Style sheets used to format the layout of Web page.
* [React Js](https://reactjs.org/docs/getting-started.html) - React.js: A JavaScript library for building user interfaces.

### Backend
* [Node Js](https://nodejs.org/en/docs/) - A runtime environment to help build fast server applications using JS.
* [Express Js](https://devdocs.io/express/) - A popular Node.js framework to build scalable server-side for web applications.
* [MongoDB](https://docs.mongodb.com/) - It provides a free cloud service to store MongoDB collections.
* [Heroku](https://heroku.com/) - A platform(PaaS) to deploy full stack web applications for free.


### Others

 - Mongoose: An ODM(Object Data Modelling)library for MongoDB and Node.js
 - JSON Web Tokens or JWTs: A standard to securely authenticate HTTP requests
 - Bootstrap 4: A popular framework for building responsive, mobile-first sites.

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/sashitharan/expenditure-accountability-app.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Change config.env file in config folder in `config.env`
   ```JS
   MONGO_URI = 'ENTER YOUR URI';
   ```



<!-- USAGE EXAMPLES -->
## Usage

  ``` npm install
 cd frontend 
 npm install
 cd .. (Go back to root)
 
 # Run frontend and backend concurrently
 npm run dev
 
 # Backend only
 npm run server
 
 # Frontend only
 npm run client
 ```
 
 # To Build Frontend 
 Remember to do this whenever you make changes in the frontend as i did not incorporate the server to npm run build
 ```
 cd frontend
 npm run build
  ```
 To make the server run the build command: 
 ```
 cd .. (go to root)
 Go to package.json
 ```
  edit heroku postbuild to: 
 ```JS
 "heroku-postbuild": "npm run install-client && npm run build",
 ```
 # Production
 Remember to change environment variable in config.env fileto 'production' or 'development'
   ```JS
   NODE_ENV = production;
   ```
Once in Production
   ```
   npm start
 ```

<!-- LICENSE -->
## License
Distributed under the MIT License. See `LICENSE` for more information.


<!-- CONTACT -->
## Contact

Lets Connect - [@Sashitharan](https://www.linkedin.com/in/sashitharan/) - sarsheyy@gmail.com

Project Link: [https://github.com/sashitharan/expenditure-accountability-app](https://github.com/sashitharan/expenditure-accountability-app)

Web Application Link: [https://inmywallet.herokuapp.com/](https://inmywallet.herokuapp.com/)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/sashitharan/
[product-screenshot]: images/screenshot.png

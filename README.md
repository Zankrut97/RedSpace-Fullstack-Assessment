# RedSpace-Fullstack-Assessment

---

This application is built using Angular framework for a frontend that allows users to fetch the details of Star Wars character by the name and also allows to fetch the details of Star Wars character by id. Additionally, there is a Node/Express backend application that fetches data from [SWAPI.dev](https://swapi.dev/) and then performs some data transformation.

- Date Created: 07 May 2021
- Last Modification Date: 10 May 2020

### Deployment

---

The Application is deployed on Heroku and the following is the URL to access it:

```
https://angular-redspace.herokuapp.com/
```

P.S. Initially it could take few seconds to load as Heroku puts the application to sleep after 30 minutes of inactivity.

### Prerequisites

---

To run this project on your local machine for development or testing purposes, please make sure you have the [Node](https://nodejs.org/en/download/) and the [Angular CLI](https://cli.angular.io/) installed globally. I have used npm to manage the dependencies, so I strongly recommend you to use it. You can install it from [here](https://www.npmjs.com/get-npm).

```
1. Node
2. Angular CLI
3. NPM
```

### Installation (Setting up local environment)

---

Run the following commands in CMD to check whether Node is installed successfully or not on your machine:

```
node -v
npm -v
```

Run the following `npm` command to install the Angular CLI on your machine:

```
npm install -g @angular/cli
```

Run the following command to check whether Angular CLI is installed successfully or not on your machine:

```
ng --version
```

#### Run Client application

- Copy either SSH or HTTPS clone link of the git project to clone this git project on your local machine.
- Next, run the `git clone` command that clones files from a remote server to your local machine. (Make sure you have git installed.)

```
git clone https://github.com/Zankrut97/RedSpace-Fullstack-Assessment.git
```

- After cloning the application from git, navigate to the ClientApp directory. Use `cd ClientApp` command.
- Execute the `npm install` command to resolve all packages and dependencies of the project.

```
npm install
```

- Finally, run `ng serve` command on your terminal to build the project locally and start the development server to host the application. It will display some log-like compiling dependencies and progress of the process of building the project.

```
ng serve
```

- Browse http://localhost:4200 on your browser that navigates to the home page of the application.

#### Run Server application

- Open another terminal and Navigate to the ServerApp directory. Use `cd ServerApp` command.
- Execute the `npm install` command to resolve all packages and dependencies of the project.

```
npm install
```

- Finally, run `node server.js` or `npm start` command on your terminal to build the project locally and start the development server to host the application. Once, the server has started It will display a message 'Listening on Port 3000!!'.

```
npm start or node server.js
```

### Features and Techniques used

---

- Services and Dependency Injections
- Common module for components/services used by multiple routes
- RxJS & Async Pipes to load data
- NgModules & Lazy Loading
- Presentational and Smart Components
- SCSS

### Built With

---

- [Angular](https://angular.io/) - The web framework used
- [Node Package Manager (NPM)](https://www.npmjs.com/get-npm) - Dependency Management
- [NodeJS](https://nodejs.org/en/download/) - Runtime Environment Platform
- [Heroku](https://www.heroku.com/) - Production Server to host the application on the Internet
- [Bootstrap](https://getbootstrap.com/) - Front-end CSS Framework

### Author

---

- Zankrut B.Thakkar (zn834201@dal.ca)

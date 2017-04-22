# Header Parser

Simple request header parser microservice. When making a request to it, it will return information about the IP address, language and operating system for the browser in use in the form:  

```
{
  ipaddress: "50.174.8.134",
  language: "en-US",
  software: "(X11; Linux x86_64)"
}
```

## [Live demo](https://header-parser-fc.herokuapp.com/)

## Installation

Before trying to run the project, make sure to initialize the folder by running ```npm install```.
This will take care of install all the project dependencies.  
After this you can run ```npm start``` to run the dev server locally which will be available at ```localhost:3000```.  

## Project Structure

```
.
├── package.json
└── server.js
```
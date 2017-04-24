# Header Parser

Simple request header parser microservice. When making a request to `/sysinfo'` it will return information about the IP address, language and operating system for the browser in use in the form:  

```
{
  ipaddress: "50.174.8.134",
  language: "en-US",
  software: "(X11; Linux x86_64)"
}
```


## [Live demo](https://header-parser-fc.herokuapp.com/)

## Project Structure

```
.
├── package.json
├── README.md
├── server.js
└── views
    └── index.pug
```
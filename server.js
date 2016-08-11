var express = require('express');
var http = require('http');

var app = express();

app.set('port', process.env.PORT || 8080);

app.get('/', (req, res) => {
  console.log(req.headers);
  const headerObj = req.headers;
  const ipAddress = headerObj['x-forwarded-for'];
  const language = headerObj['accept-language'].substr(0, headerObj['accept-language'].indexOf(',', 0));
  const os = headerObj['user-agent'].match(new RegExp(/(\(([^)]+)\))/g))[0];
  
  res.send(JSON.stringify({
    ipaddress: ipAddress,
    language: language,
    software: os
  }));
})

app.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}`));
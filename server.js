const express = require('express');
const http = require('http');
const helmet = require('helmet');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(helmet());

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/sysinfo', (req, res) => {
  const headerObj = req.headers;
  const ipAddress = headerObj['x-forwarded-for'] || req.ip;
  const language = headerObj['accept-language'].substr(0, headerObj['accept-language'].indexOf(',', 0));
  const os = headerObj['user-agent'].match(new RegExp(/(\(([^)]+)\))/g))[0];
  
  res.send(JSON.stringify({
    ipaddress: ipAddress,
    language: language,
    software: os
  }));
})

app.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}`));
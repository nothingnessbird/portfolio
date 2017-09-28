'use strict';

const EXPRESS = require('express');
const bodyParser = require('body-parser').urlencoded({extended: true});
const requestProxy = require('express-request-proxy');
const APP = EXPRESS();
const PORT = process.env.PORT || 3000;

APP.use(EXPRESS.static('public'));

APP.get('/github/*', (request, response) => {
  (requestProxy(
    {
      url: `https://api.github.com/${request.params[0]}`,
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`
      }
    }
  ))(request, response)
});

APP.get('*', function(request, response){
  response.sendFile('index.html', {root: './public'});
})

APP.listen(PORT, function() {
  console.log(`Express server currently running on port ${PORT}`);
});

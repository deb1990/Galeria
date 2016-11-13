var express = require('express'),
    app = express(),
    request = require('request');

const portNo = 3012,
    clientId = "093fd3f83b3fea9",
    apiPrefix = "https://api.imgur.com/3/gallery";

//Server static front-end files
app.use('/', express.static('public'));

//API for Imgur Server
app.get('/imgur', function (req, res) {
    request({
        url: apiPrefix + '/' + req.query.url,
        headers: {
            'Authorization': 'Client-ID ' + clientId
        }
    }, function (error, response) {
        res.send(response.body);
    });
   
});

app.listen(portNo, function () {
    console.log('App listening on port ' + portNo);
});


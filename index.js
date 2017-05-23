var express = require('express');
var app = express();

app.use(express.static('public'));

// set up the template engine
app.set('views', './views');
app.set('view engine', 'pug');

// GET response for '/'
app.get('/', function (req, res) {
    //determine image to use

    var image = getRandomFileName();
    // render the 'index' template, and pass in a few variables
    res.render('index', { title: 'Freinds of Sonning Common Library',
     message: 'Welcome to our new home online',
     subhead: 'Sorry it is a bit of a mess right now. We are hard at work so come back in a few days and see how we are getting on.',
     image : image,
     logo: 'FoSCLlogo.png' });

});

// start up the server

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

function getRandomFileName(){

  var f= ["working1.jpeg", "working2.png", "working3.jpg", "working4.jpg",
    "working5.gif", "working6.gif",  "working7.gif", "working8.gif",
    "working9.gif", "working10.gif"];
  var imageNum = Math.floor(Math.random() * (f.length - 0));

  return f[imageNum];
}

const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

const AM = require('./routes/account_menager');

const {getHomePage} = require('./routes/index');
// const {man}
const port = 5000;

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'projekt'
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
// app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload

app.post('/api/login', function (req, res) {
    AM.manualLogin(req.body['user'], req.body['pass'], function (e, o) {
      if (!o) {
        res.status(400).send(e);
      } else {
        req.session.user = o;
        res.status(200).send(o);
      }
    });
  });

// routes for the app
app.get('/', getHomePage);
// app.post('/api/login',)
/*  
TODO

AUTH
/login
/logout
/signup

CHAT
/view
/all
/send
/new
/set/{id}

COMMENTS
/post/{postId}
/add

FRIENDS
/invite/{friendId}
/add/{friendId}
/index
/invites
/{id}/delete

PHOTOS
/add
/delete?

POSTS
/page/{page}
/add

USER
/profile
/index
/edit
/password

*/

// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});


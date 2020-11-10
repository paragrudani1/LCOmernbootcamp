const express = require('express');

const app = express();

const port = 8000;

const isAdmin = (req, res, next) => {
    res.send('isAdmin is running!');
    next();
}
const admin = (req, res) => {
    res.send('this is admin dashboard');
}

const test = false;

const isLoggedin = (req, res, next) => {
     res.send('not logged in');
     next();
}

app.get('/admin',  !test ? isLoggedin : isAdmin, admin) ;

app.listen(port, () => console.log('server stated on port ' + port))
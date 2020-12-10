var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');
var app = express()
var router = express.Router()
var port = 3000

//user body-parser
router.use(bodyParser.urlencoded({extended: false}))


app.post('/auth/login', (req, res)=>{
    res.send('login')
    console.log('/auth/login ', req)
})

app.post('/auth/register', (req, res)=>{
    var hashedPassword = bcrypt.hashSync(req.body.password, 8)
    console.log('/auth/register ', req)
})

app.get('/', (req, res)=>{
    res.send('Morning !')
})




//start 
app.listen(port, ()=>{
    console.log('App listening on port ' + port)
})
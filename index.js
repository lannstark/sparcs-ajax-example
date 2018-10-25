const express = require('express');
const app = express();
const bodyParser = require('body-parser');

/* Databas connection */
const mongoose = require('mongoose');
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {
    console.log("Connected to MongoDB server");
});
mongoose.connect('mongodb://localhost/ajax-example')

// MiddleWare seeting
app.use(express.static('public/views'));
app.set('views', __dirname+'/public/views');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Routing
app.get('/', (req, res) => {
    res.render('main.html');
})

// API
app.post('/api/v1/add', (req, res) => {
    console.log(req)
})

const server = app.listen(8000, () => {
    console.log('server is running at 8000');
});

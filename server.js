const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();

const port_number = 8081;

app.listen(port_number, ()=>{
    console.log('we are live on ' + port_number)
});
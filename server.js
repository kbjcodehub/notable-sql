const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
const db = require('./app/config/db');
const port_number = 8081;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err);

    var adminDb = database.db("Demo").admin();
    // List all the available databases
    adminDb.listDatabases(function (err, result) {

        if (err) return console.log(err);
        console.log(result.databases);
        database.close();
    });

    require('./app/routes/')(app, database);
    app.listen(port_number, () => {
        console.log('service listening on... ' + port_number)
    });

});


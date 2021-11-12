const { request } = require("express");
var ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {
    app.post('/notes', (req, res) => {
        console.log('post note method ');
        console.log(req.body);

        const newNote = { text: req.body.body, title: req.body.title }

        db.collection('Notes').insertOne(newNote, (err, result) => {
            if (err) {
                return res.send("An error ocurred, please try agian...")
            }

            console.log(result.acknowledged);
            res.send('Successful');
        });
    });

    app.get('/notes/:id', (req, res) => {
        console.log('get note method ');

        const id = req.params.id;
        console.log(id);

        const details = {
            '_id': new ObjectID(id)
        };

        console.log(details);
        db.collection('Notes').findOne(details, (err, item) => {

            if (err) {
                return res.send("An error ocurred, please try agian...")
            }
            console.log(item);
            res.send(item);
        });
    });

    app.delete('/notes/:id', (req, res) => {
        console.log('delete note method ');

        const id = req.params.id;
        console.log(id);

        const details = { '_id': new ObjectID(id) };

        db.collection('Notes').remove(details, (err, item) => {

            if (err) {
                return res.send("An error ocurred, please try agian...")
            }
            console.log(item);
            res.send(item);
        });

    });

    app.put('/notes/:id', (req, res) => {
        console.log('update note method ');

        const id = req.params.id;
        console.log(id);

        const details = { '_id': new ObjectID(id) };
        const note = { text: req.body.body, title: req.body.title };

        db.collection('Notes').replaceOne(details, note, (err, result) => {
            if (err) {
                return res.send("An error ocurred, please try agian...")
            }
            console.log(result);
            res.send(result);
        });
    });
};
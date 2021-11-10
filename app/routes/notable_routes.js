const { request } = require("express");

module.exports = function (app, db) {
    app.post('/notes', (req, res) => {
        console.log('post note method ');
        console.log(req.body);

        const newNote = {text: req.body.body, title: req.body.title}

        db.collection('Notes').insertOne(newNote, (err, result) => {
            if(err){
                return res.send("An error ocurred, please try agian...")
            }

            console.log(result.acknowledged)
            res.send('Successful');
        });
    });
};
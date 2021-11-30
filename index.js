const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT_NUMBER = 8081;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT_NUMBER, () => {
    console.log('service listening on... ' + PORT_NUMBER)

});

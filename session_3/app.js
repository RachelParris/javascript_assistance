const express = require('express')
const app = express()
var api = require('./routes/api')
var db = require('./routes/db')

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('App is UP');
});

app.use('/api', api);
app.use('/db', db);

app.listen(3000, () => console.log('Listening on port 3000'));

module.exports = app;
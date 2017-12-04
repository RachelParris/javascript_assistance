const express = require('express')
const app = express()
var api = require('./routes/api')

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('App is UP');
});

app.use('/api', api);

app.listen(3000, () => console.log('Listening on port 3000!'));


var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'test',
  password : 'test',
  database : 'testDb'
});

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err
  console.log('The solution is: ', rows[0].solution)
})

connection.end()

module.exports = app;
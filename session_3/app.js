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

// JOINS: https://www.w3schools.com/sql/sql_join.asp

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err
  console.log('The solution is: ', rows[0].solution)
});

var createIfExists = " \
  CREATE TABLE IF NOT EXISTS Persons ( \
    PersonID int, \
    LastName varchar(255), \
    FirstName varchar(255), \
    Address varchar(255), \
    City varchar(255)  \
)";

connection.query(createIfExists, function (err, rows, fields) {
  if (err) throw err
  console.log('Table has been created');
});

connection.end()

module.exports = app;
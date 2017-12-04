var express = require('express');
var router = express.Router();

var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'test',
  password : 'test',
  database : 'testDb'
});

// JOINS: https://www.w3schools.com/sql/sql_join.asp

var createIfExists = " \
  CREATE TABLE IF NOT EXISTS Persons ( \
    PersonID int, \
    LastName varchar(255), \
    FirstName varchar(255), \
    Address varchar(255), \
    City varchar(255)  \
)";

router.get('/createTable', function (req, res) {
  connection.connect()
  connection.query(createIfExists, function (err, rows, fields) {
    if (err) throw err
    console.log('Table has been created');
  });
  connection.end()
  res.send('Table has been created');
});

var ans;
router.get('/test', function (req, res) {
  connection.connect()
  connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    if (err) throw err
    ans = rows[0].solution
    res.send('The solution is: ' + ans);
  });
  connection.end()
});


module.exports = router;
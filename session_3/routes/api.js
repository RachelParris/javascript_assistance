var express = require('express');

var router = express.Router();
var data = require('../data.js');

router.get('/users/:id/field/:field', function (req, res) {
	console.log('req.params', req.params);
	res.send('Here\s the value from the Params:\n' + data[req.params.id-1][req.params.field]);
});

router.get('/usersAgain', function (req, res) {
	console.log('req.query', req.query);
	res.send('Here\'s your value from the query:\n' + data[req.query.id][req.query.field]);
});

module.exports = router;
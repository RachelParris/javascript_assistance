const express = require('express')
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

var cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

var cb2 = function (req, res) {
  res.send('Hello from C!')
}

app.get('/', function(req, res) {
	console.log('Hello, World!');
	console.log('req.params', req.params);
	res.send('Atlanta Bread is awesome.');
});

app.get('/one', function(req, res) {
	res.send('One');
});

app.get('/abc?d', function(req, res) {
	res.send('reg exp');
});

app.get('/example/c', [cb0, cb1, cb2])

app.listen(3000, () => console.log('Listening on port 3000!'));


// -----------------------------------------------

var router = express.Router();

var fun = function (req, res) {
	res.send('Let\'s go have fun');
}

var smaller = function (req, res) {
	res.send('I\'m smaller!');
}

var bigger = function (req, res) {
	res.send('I\'m bigger!');
}

app.use('/first', router); // Mount the router as middleware at path /first

router.get('/', function (req, res) {
	res.send('You\'re using a router!');
});

router.get('/small', smaller);

router.get('/big', bigger);


// -----------------------------------------------

app.use('/second', fun);

app.get('/small', smaller);

app.get('/big', bigger);


// -----------------------------------------------

var router2 = express.Router();

app.use('/api', router2);

router2.get('/', function (req, res) {
	res.send('Here is some default information');
})

router2.get('/users', function (req, res) {
	res.send('User information');
})

// -----------------------------------------------

// POST method route
app.post('/', function (req, res) {
	console.log('req.body', req.body);
	console.log('req.params', req.params);
  res.send('POST request to the homepage. Here\'s the key from your request body: ' + req.body.person.favoriteCars[1]);
})
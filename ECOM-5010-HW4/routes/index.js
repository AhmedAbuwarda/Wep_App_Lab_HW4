var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express - WEB LAB HW4' });
});
router.get('/about', function (req, res, next) {
  res.send('about.html');
});
router.get('/greeting', function (req, res, next) {
  res.render('greeting', { title: 'Greeting' });
});
router.get('/greeting/:data', function (req, res, next) {
  res.render('greeting', { title: 'Greeting', output: JSON.stringify({ message: 'Hello ' + req.params.data }) });
});
router.post('/data/submit', function (req, res, next) {
  res.render('greeting', { title: 'Greeting', output: JSON.stringify({ message: req.body.data, 'name': 'Ahmed' }) });
});
module.exports = router;

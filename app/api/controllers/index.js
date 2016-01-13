var express = require('express')
  , router = express.Router();

router.use(express.static(__dirname + '/../public'));

router.use('/api/todos', require('./todos'));
router.use('/api/accounts', require('./accounts'));
router.use(/', require('./)
router.get('/', function(req, res) {
  res.send('Home page of TimeShare');
});

router.get('/about', function(req, res) {
  res.send('Learn about TimeShare');
});

module.exports = router;
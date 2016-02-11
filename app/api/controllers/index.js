var express = require('express')
  , router = express.Router();

//static assets
router.use(express.static(__dirname + '/../../public'));

router.use(function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});


router.use('/api/accounts', require('./accounts'));
router.use('/api/todos', require('./todos'));
router.use('/api/announces', require('./announces'));
router.use('/api/users', require('./users'));
//do the same for responses and serviceCategories

router.get('/', function(req, res) {
  res.send('Home page');
});

router.get('/about', function(req, res) {
  res.send('Learn about TimeShare');
});

module.exports = router;


var express = require('express');
var router = express.Router();





router.use('/api/accounts', require('./accounts'));
router.use('/api/todos', require('./todos'));
router.use('/api/announces', require('./announces'));
router.use('/api/users', require('./users'));
//do the same for responses and serviceCategories

//static assets
router.use(express.static(__dirname + '/../../public'));


router.get('/*', function(req, res) {
  res.sendFile('index.html', {
    'root': __dirname + '/../../public'
  });
});


module.exports = router;
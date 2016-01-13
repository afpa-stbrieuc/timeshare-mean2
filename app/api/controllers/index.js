var express = require('express')
  , router = express.Router();

//static assets
router.use(express.static(__dirname + '/../../public'));

router.use('/api/accounts', require('./accounts'));

router.get('/about', function(req, res) {
  res.send('Learn about TimeShare');
});

module.exports = router;


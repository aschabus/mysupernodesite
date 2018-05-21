var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Andi's Homepage fuer den 12.Bezirk!" });
});

module.exports = router;

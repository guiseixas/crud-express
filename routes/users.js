var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) { //caminho dos paths
  res.json(
    {users: 
      [
        {name: 'Timmy'},
        {name: 'Gui'},
      ]}
    );
});

module.exports = router;

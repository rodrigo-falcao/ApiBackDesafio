const express = require('express');
const conectarBancoDados = require('../middlewares/conectarBD');
const router = express.Router();

/* GET users listing */
router.get('/', conectarBancoDados, function(req, res, next) {
  res.send('response with a resource')
})

module.exports = router;
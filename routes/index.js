const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    name: 'Michael Susanto',
    npm: '1806205653'
  })
})

module.exports = router;
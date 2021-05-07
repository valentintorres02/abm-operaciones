const express = require('express');
const router = express.Router();
const { getOperationsBalance } = require('../controllers/balances');

router.get('/', getOperationsBalance);

module.exports = router;
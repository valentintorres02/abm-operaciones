const express = require('express');
const router = express.Router();
const { createOperation, getAllOperations } = require('../controllers/operation');

// Get all operations
router.get('/', getAllOperations);
// Create operation
router.post('/', createOperation);


module.exports = router;
const express = require('express');
const router = express.Router();
const { createOperation, getAllOperations, getLastOperationsByNumber } = require('../controllers/operation');

// Get all operations
router.get('/', getAllOperations);
// Create operation
router.post('/', createOperation);
// Get last operations
router.get('/:numberOfOperations', getLastOperationsByNumber);


module.exports = router;
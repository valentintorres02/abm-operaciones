const express = require('express');
const router = express.Router();
const { createOperation, getAllOperations, getOperationById, getLastOperationsByNumber,
  getAllOperationsByPage, updateOperationById } = require('../controllers/operation');

// Get all operations
router.get('/', getAllOperations);
// Get operation by id
router.get('/select/:id', getOperationById);
// Create operation
router.post('/', createOperation);
// Get last operations
router.get('/operations/:numberOfOperations', getLastOperationsByNumber);
// Get operations with pagination
router.get('/page', getAllOperationsByPage);
// Update operation by Id.
router.put('/:id', updateOperationById);

module.exports = router;
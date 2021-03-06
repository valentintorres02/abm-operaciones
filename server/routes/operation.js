const express = require('express');
const router = express.Router();
const { createOperation, getAllOperations, getOperationById, getLastOperationsByNumber,
  getAllOperationsByPage, updateOperationById, deleteOperationById } = require('../controllers/operation');

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
router.patch('/:id', updateOperationById);
// Delete operation by Id.
router.delete('/:id', deleteOperationById);

module.exports = router;
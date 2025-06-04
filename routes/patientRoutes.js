const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
const authMiddleware = require('../middlewares/authMiddleware');

// All patient routes require authentication
router.use(authMiddleware);

// POST /api/patients
router.post('/', patientController.create);

// GET /api/patients
router.get('/', patientController.getAll);

// GET /api/patients/:id
router.get('/:id', patientController.getOne);

// PUT /api/patients/:id
router.put('/:id', patientController.update);

// DELETE /api/patients/:id
router.delete('/:id', patientController.remove);

module.exports = router;


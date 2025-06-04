const express = require('express');
const router = express.Router();
const mappingController = require('../controllers/mappingController');
const authMiddleware = require('../middlewares/authMiddleware');

// All mapping routes require authentication
router.use(authMiddleware);

// POST /api/mappings
router.post('/', mappingController.assignDoctor);

// GET /api/mappings
router.get('/', mappingController.getAllMappings);

// GET /api/mappings/:patientId
router.get('/:patientId', mappingController.getDoctorsForPatient);

// DELETE /api/mappings/:id
router.delete('/:id', mappingController.removeMapping);

module.exports = router;

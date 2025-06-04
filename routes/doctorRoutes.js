const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');
const authMiddleware = require('../middlewares/authMiddleware');

// All doctor routes require authentication
router.use(authMiddleware);

// POST /api/doctors
router.post('/', doctorController.create);

// GET /api/doctors
router.get('/', doctorController.getAll);

// GET /api/doctors/:id
router.get('/:id', doctorController.getOne);

// PUT /api/doctors/:id
router.put('/:id', doctorController.update);

// DELETE /api/doctors/:id
router.delete('/:id', doctorController.remove);

module.exports = router;

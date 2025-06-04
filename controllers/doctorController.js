const { Doctor } = require('../models');

exports.create = async (req, res) => {
  const { name, specialization } = req.body;
  try {
    const doctor = await Doctor.create({ name, specialization });
    res.status(201).json(doctor);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create doctor', error: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const doctors = await Doctor.findAll();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get doctors', error: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id);
    if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
    res.json(doctor);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get doctor', error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id);
    if (!doctor) return res.status(404).json({ message: 'Doctor not found' });

    await doctor.update(req.body);
    res.json({ message: 'Doctor updated', doctor });
  } catch (err) {
    res.status(500).json({ message: 'Update failed', error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id);
    if (!doctor) return res.status(404).json({ message: 'Doctor not found' });

    await doctor.destroy();
    res.json({ message: 'Doctor deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Delete failed', error: err.message });
  }
};

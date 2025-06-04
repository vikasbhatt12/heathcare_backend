const { Patient } = require('../Models');

exports.create = async (req, res) => {
  const { name, age, disease } = req.body;
  try {
    const patient = await Patient.create({
      name,
      age,
      disease,
      userId: req.user.id,
    });
    res.status(201).json(patient);
  } catch (err) {
    res.status(500).json({ message: 'Could not create patient', error: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const patients = await Patient.findAll({ where: { userId: req.user.id } });
    res.json(patients);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch patients', error: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const patient = await Patient.findOne({ where: { id: req.params.id, userId: req.user.id } });
    if (!patient) return res.status(404).json({ message: 'Patient not found' });
    res.json(patient);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get patient', error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const patient = await Patient.findOne({ where: { id: req.params.id, userId: req.user.id } });
    if (!patient) return res.status(404).json({ message: 'Patient not found' });

    await patient.update(req.body);
    res.json({ message: 'Patient updated successfully', patient });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update patient', error: err.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const patient = await Patient.findOne({ where: { id: req.params.id, userId: req.user.id } });
    if (!patient) return res.status(404).json({ message: 'Patient not found' });

    await patient.destroy();
    res.json({ message: 'Patient deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete patient', error: err.message });
  }
};

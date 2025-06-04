const { Mapping, Patient, Doctor } = require('../Models');

exports.assignDoctor = async (req, res) => {
  const { patientId, doctorId } = req.body;
  try {
    const patient = await Patient.findByPk(patientId);
    const doctor = await Doctor.findByPk(doctorId);

    if (!patient || !doctor)
      return res.status(404).json({ message: 'Invalid patient or doctor ID' });

    const mapping = await Mapping.create({ patientId, doctorId });
    res.status(201).json(mapping);
  } catch (err) {
    res.status(500).json({ message: 'Failed to assign doctor', error: err.message });
  }
};

exports.getAllMappings = async (req, res) => {
  try {
    const mappings = await Mapping.findAll({ include: [Patient, Doctor] });
    res.json(mappings);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get mappings', error: err.message });
  }
};

exports.getDoctorsForPatient = async (req, res) => {
  const { patientId } = req.params;
  try {
    const mappings = await Mapping.findAll({
      where: { patientId },
      include: [Doctor],
    });
    res.json(mappings);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch mappings', error: err.message });
  }
};

exports.removeMapping = async (req, res) => {
  try {
    const mapping = await Mapping.findByPk(req.params.id);
    if (!mapping) return res.status(404).json({ message: 'Mapping not found' });

    await mapping.destroy();
    res.json({ message: 'Doctor removed from patient' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to remove mapping', error: err.message });
  }
};

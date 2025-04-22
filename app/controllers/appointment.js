const Appointment = require('../models/appointment');
const User = require('../models/user');

module.exports = {
  create: async (req, res) => {
    const { doctorId, date, reason } = req.body;

    try {
      const appointment = await Appointment.create({
        patientId: req.user.id, // pris depuis le token
        doctorId,
        date,
        reason
      });

      res.status(201).json(appointment);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getAll: async (req, res) => {
    const whereClause = req.user.role === 'medecin'
      ? { doctorId: req.user.id }
      : { patientId: req.user.id };

    const appointments = await Appointment.findAll({
      where: whereClause,
      include: [
        { model: User, as: 'patient', attributes: ['id', 'name'] },
        { model: User, as: 'doctor', attributes: ['id', 'name'] }
      ],
      order: [['date', 'ASC']]
    });

    res.json(appointments);
  },

  delete: async (req, res) => {
    const id = parseInt(req.params.id);
    const appt = await Appointment.findByPk(id);

    if (!appt) return res.sendStatus(404);

    // autorisé si c'est le patient ou le médecin
    if (req.user.id !== appt.patientId && req.user.id !== appt.doctorId) {
      return res.sendStatus(403);
    }

    await appt.destroy();
    res.sendStatus(204);
  }
};
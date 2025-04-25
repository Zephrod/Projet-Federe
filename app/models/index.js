const User = require('./user');
const Appointment = require('./appointment');

// Define associations here
Appointment.belongsTo(User, { as: 'patient', foreignKey: 'patientId' });
Appointment.belongsTo(User, { as: 'doctor', foreignKey: 'doctorId' });
User.hasMany(Appointment, { as: 'appointmentsAsPatient', foreignKey: 'patientId' });
User.hasMany(Appointment, { as: 'appointmentsAsDoctor', foreignKey: 'doctorId' });

module.exports = { User, Appointment };
const connection = require("./models/db");
const User = require("./models/user");
const MedicalFile = require("./models/medicalFile");
const Appointment = require("./models/appointment");

User.hasMany(Appointment, { foreignKey: 'patientId', as: 'appointments' });
User.hasMany(Appointment, { foreignKey: 'doctorId', as: 'consultations' });

Appointment.belongsTo(User, { foreignKey: 'patientId', as: 'patient' });
Appointment.belongsTo(User, { foreignKey: 'doctorId', as: 'doctor' });

connection
  .sync({
    force: true,
  })
  .then(() => console.log("Database synced"))
  .then(() => connection.close());

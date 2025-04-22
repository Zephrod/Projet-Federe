const connection = require("./models/db");
const User = require("./models/user");
const MedicalFile = require("./models/medicalFile");
const Appointment = require("./models/appointment");

// Define relationships
User.hasOne(MedicalFile, { foreignKey: 'patientId' });
MedicalFile.belongsTo(User, { foreignKey: 'patientId' });

User.hasMany(Appointment, { foreignKey: 'patientId', as: 'appointments' });
User.hasMany(Appointment, { foreignKey: 'doctorId', as: 'consultations' });

Appointment.belongsTo(User, { foreignKey: 'patientId', as: 'patient' });
Appointment.belongsTo(User, { foreignKey: 'doctorId', as: 'doctor' });

User.hasMany(MedicalFile, { foreignKey: 'patientId' });
MedicalFile.belongsTo(User, { foreignKey: 'patientId' });

connection
  .sync({
    alter:true,
  })
  .then(()=> console.log("database synced"))
  .then(()=> connection.close());



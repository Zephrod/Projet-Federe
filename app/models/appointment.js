const { Model, DataTypes } = require("sequelize");
const connection = require("./db");

class Appointment extends Model {}

Appointment.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  reason: {
    type: DataTypes.STRING,
    allowNull: true
  },
  patientId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  doctorId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }

}, 
{
  sequelize: connection,
  timestamps: true
});

module.exports = Appointment;

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
  }
}, {
  sequelize: connection,
  timestamps: true
});

module.exports = Appointment;

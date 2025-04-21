const { DataTypes } = require("sequelize");
const sequelize = require("./db");

const MedicalFile = sequelize.define("MedicalFile", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.ENUM("gripe", "migraine", "fatigue","fievre","autres"),
    allowNull: false
  },
  severity: {
    type: DataTypes.ENUM("mild", "moderate", "severe"),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: "medical_files",
  timestamps: true
});

module.exports = MedicalFile;

const { DataTypes } = require("sequelize");
const sequelize = require("./db");

const MedicalFile = sequelize.define("MedicalFile", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  patientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  allergies: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: null
  },
  maladiesHereditaires: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: null
  },
  antecedentsMedicaux: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: null
  },
  groupeSanguin: {
    type: DataTypes.STRING,
    allowNull: true
  },
  traitementEnCours: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  dateCreation: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  derniereMiseAJour: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: "medical_files",
  timestamps: true
});

module.exports = MedicalFile;

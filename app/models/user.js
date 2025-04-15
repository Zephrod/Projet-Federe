const bcrypt = require("bcryptjs");
const { Model, DataTypes } = require("sequelize");
const connection = require("./db");

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    role: {
      type: DataTypes.ENUM('user','admin'),
      defaultValue : 'user',
      allowNull: false,
    },
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        //len: [8, 32],
        //is: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d])[a-zA-Z\d]{8,32}$/,
      },
    },
    activated: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
  },
  {
    sequelize: connection,
    timestamps: false,
  }
);
User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
});

User.beforeUpdate(async (user) => {
  if(user.changed('password')) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }
});
module.exports = User;

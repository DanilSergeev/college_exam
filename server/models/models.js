const sequelize = require("../db")
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, },
  name: { type: DataTypes.STRING, },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
}, { timestamps: false })



const Reviews = sequelize.define('reviews', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  message: { type: DataTypes.STRING, },
  isСonfirmed: { type: DataTypes.BOOLEAN, defaultValue: false },
}, { timestamps: false })


User.hasMany(Reviews)
Reviews.belongsTo(User)


module.exports = {
  User,
  Reviews
}

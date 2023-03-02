const Sequelize = require('sequelize'); //importing Sequelize package

const sequelize = require('../util/database'); // confirm which database this is working with

const OrderItem = sequelize.define('orderItem', { // setting this information to database
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  quantity: Sequelize.INTEGER
});

module.exports = OrderItem;
const Sequelize = require('sequelize'); // importing sequelize package

const sequelize = require('../util/database'); // pull information and store information to database

const CartItem = sequelize.define('cartItem', { // sequelizing CartItem to database
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  quantity: Sequelize.INTEGER
});

module.exports = CartItem;
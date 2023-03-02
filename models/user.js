const Sequelize = require('sequelize'); //importing Sequelize package

const sequelize = require('../util/database');  // confirm which database this is working with

const User = sequelize.define('user', { // setting this information to database
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING
});

module.exports = User;
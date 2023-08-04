const {Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize ('mysql://root:root@localhost/proyectomuebledb');

const mueble = sequelize.define('mueble', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },


});

module.exports = mueble;



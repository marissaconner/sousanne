'use strict';

var Sequelize = require( 'sequelize' );

var user = process.env.SQLUSER || 'root';
var password = process.env.SQLPASS || null;
var port = process.env.SQLPORT || 3306;
var dbname = process.env.SQLDBNAME || 'sousanne';
var host = process.env.SQLHOST || 'localhost';

var sequelize = new Sequelize( dbname, user, password, {
  host: host,
  port: port,
  dialect: 'mysql',
  dialectOptions: {
    multipleStatements: true
  },

  define: {
    underscored: true
  }

});

module.exports = sequelize;

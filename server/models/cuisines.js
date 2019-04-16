'use strict';

module.exports = function( sequelize, DataTypes ){
  const Cuisine = sequelize.define( 'Cuisine', 
  //attributes
  {
    name: DataTypes.STRING,
  });

  return Cuisine;
}
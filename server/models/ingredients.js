'use strict';

module.exports = function( sequelize, DataTypes ) {
  var Ingredient = sequelize.define( 'Ingredient', {
    name: {
      type: DataTypes.STRING(250),
      unique: true,
    },
    tableName: 'ingredients',
    
  });
  return Ingredient;
};

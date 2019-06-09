'use strict';

module.exports = function( sequelize, DataTypes ){
  const Unit = sequelize.define( 'Unit', 
  //attributes
  {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    amount: DataTypes.INTEGER
  });

  return Unit;
     models.Unit.hasMany( models.Ingredient );
     models.Unit.hasMany( models.Product );
}
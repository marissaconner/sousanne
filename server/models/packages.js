'use strict';

module.exports = function( sequelize, DataTypes ){
  const Package = sequelize.define( 'Package', 
  //attributes
  {
    amount: DataTypes.FLOAT,
    multipack: DataTypes.INTEGER
  });

  Package.associate = function( models ){
    models.Package.belongsTo( models.Unit );
    models.Package.belongsTo( models.Food, { as: 'food' } ); 
  }

  return Package;
}
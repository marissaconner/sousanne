'use strict';

module.exports = function( sequelize, DataTypes ){
  const Store = sequelize.define( 'Store', 
  //attributes
  {
    name: DataTypes.STRING,
    // Perhaps later add location information -- help others out by sharing prices.
  });

  Store.associate = function( models ){
    models.Store.belongsTo( models.User , { as: 'store' } );
  }

  return Store;
}
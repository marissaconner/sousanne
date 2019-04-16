'use strict';

module.exports = function( sequelize, DataTypes ){
  const Pricebook = sequelize.define( 'Pricebook', 
  //attributes
  {
    //No attributes that aren't created_at or updated_at or ID really.
    denomination: {
      type: DataTypes.STRING,
      default: 'USD'
    }
  });

  Pricebook.associate = function( models ){
    models.Pricebook.belongsTo( models.User , { as: 'user' } );
  }

  return Pricebook;
}
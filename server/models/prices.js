'use strict';

module.exports = function( sequelize, DataTypes ){
  const Price = sequelize.define( 'Price', 
  //attributes
  {
    offerStart: DataTypes.DATE,
    offerEnd: DataTypes.DATE,
    discount: DataTypes.INTEGER,
    price: DataTypes.FLOAT
  });

  Price.associate = function( models ){
    models.Price.belongsTo( models.Store );
    models.Price.belongsTo( models.Product );
  }

  return Price;
}
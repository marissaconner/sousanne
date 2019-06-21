'use strict';

module.exports = function( sequelize, DataTypes ){
  const Product = sequelize.define( 'Product', 
  //attributes
  {
    brand: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    multipack: DataTypes.INTEGER
  });

  Product.associate = function( models ){
    models.Product.belongsToMany( models.Store, { through: 'b_products_stores' });
    models.Product.belongsTo( models.Pricebook );
    models.Product.belongsTo( models.Unit );
  }

  return Product;
}
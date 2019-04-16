'use strict';

module.exports = function( sequelize, DataTypes ){
  const Product = sequelize.define( 'Product', 
  //attributes
  {
    brand: DataTypes.STRING
  });

  Product.associate = function( models ){
    models.Product.belongsToMany( models.Store, { through: 'b_products_stores' })
  }

  return Product;
}
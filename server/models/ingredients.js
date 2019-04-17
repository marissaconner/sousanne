'use strict';

module.exports = function( sequelize, DataTypes ) {
  const Ingredient = sequelize.define( 'Ingredient', 
    //attributes
    {
      amount: DataTypes.INTEGER,
      optional: {
        type: DataTypes.BOOLEAN,
        default: false 
      }
    },
    //options
    {
      tableName: 'Ingredients',
    });

  Ingredient.associate = function( models ){
    models.Ingredient.belongsTo( models.Recipe, { as: 'recipe' } );
    models.Ingredient.belongsTo( models.Food, { as: 'food' } );
    models.Ingredient.belongsTo(    models.Unit, { as: 'unit' } );
  }
  
  return Ingredient;
};
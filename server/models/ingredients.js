'use strict';

module.exports = function( sequelize, DataTypes ) {
  const Ingredient = sequelize.define( 'Ingredient', 
    //attributes
    {
      name: {
        type: DataTypes.STRING(250),
        unique: true,
      },
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
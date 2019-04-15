'use strict';

module.exports = function( sequelize, DataTypes ) {
  var Ingredient = sequelize.define( 'Ingredient', {
    name: {
      type: DataTypes.STRING(250),
      unique: true,
    },
    parentId: {
      type: DataTypes.INTEGER,
      hierarchy: true
    }
    },
    {
    tableName: 'ingredients',
  });
  Ingredient.belongsToMany( Ingredient, { as: 'components', foreignKey: 'ingredient' , through: 'ingredients_self' } );
  return Ingredient;
};

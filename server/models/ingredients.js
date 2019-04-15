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
    classMethods: {
      associate: function( models ) {
          Ingredient.belongsToMany( models.Ingredient, { through: 'ingredients_ingredients'});
      }
    }
  });

  return Ingredient;
};

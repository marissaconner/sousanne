'use strict';

module.exports = function( sequelize, DataTypes ){
  const Recipe = sequelize.define( 'Recipe', 
  //attributes
  {
    name: DataTypes.STRING,
    drink: {
      type: DataTypes.BOOLEAN,
      default: false
    }
  },
  //options
  );

  Recipe.associate = function( models ){
    models.Recipe.belongsToMany( models.Instruction, { through: 'b_recipes_instructions' } );
    models.Recipe.belongsTo( models.Cuisine, {as: 'cuisine' } );
  }

  return Recipe;
}
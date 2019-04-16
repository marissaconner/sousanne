'use strict';

module.exports = function( sequelize, DataTypes ){
  const Recipe = sequelize.define( 'Recipe', 
  //attributes
  {
    name: DataTypes.STRING,
  },
  //options
  );

  Recipe.associate = function( models ){
    models.Recipe.belongsToMany( models.Instruction, { through: 'b_recipes_instructions' } );
  }

  return Recipe;
}
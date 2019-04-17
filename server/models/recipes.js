'use strict';

module.exports = function( sequelize, DataTypes ){
  const Recipe = sequelize.define( 'Recipe', 
  //attributes
  {
    name: DataTypes.STRING,
    drink: {
      type: DataTypes.BOOLEAN,
      default: false
    },
    preheat: DataTypes.INTEGER
  },
  //options
  );

  Recipe.associate = function( models ){
    models.Recipe.hasMany( models.Instruction );
    models.Recipe.hasMany( models.Ingredient );
    models.Recipe.belongsTo( models.Cuisine, {as: 'cuisine' } );
  }

  return Recipe;
}
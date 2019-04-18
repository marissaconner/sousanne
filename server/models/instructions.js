'use strict';

module.exports = function( sequelize, DataTypes ){
  const Instruction = sequelize.define( 'Instruction', 
  //attributes
  {
    index: DataTypes.INTEGER,
    instruction: DataTypes.STRING
  });

  Instruction.associate = function( models ){
    models.Instruction.belongsTo( models.Recipe, { as: 'recipe' } );
    models.Instruction.hasMany( models.Ingredient );
  }

  return Instruction;
}
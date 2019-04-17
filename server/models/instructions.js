'use strict';

module.exports = function( sequelize, DataTypes ){
  const Instruction = sequelize.define( 'Instruction', 
  //attributes
  {
    index: DataTypes.INTEGER,
    instruction: DataTypes.STRING
  });

  Instruction.associate = function( models ){
    models.Instruction.belongsTo( models.Recipe );
  }

  return Instruction;
}
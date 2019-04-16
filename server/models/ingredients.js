'use strict';

module.exports = function( sequelize, DataTypes ) {
  const Ingredient = sequelize.define( 'Ingredient', 
    //attributes
    {
      name: {
        type: DataTypes.STRING(250),
        unique: true,
      },
    },
    //options
    {
      tableName: 'ingredients',
    });

  Ingredient.associate = function( models ){
    models.Ingredient.belongsToMany( Ingredient, { as: 'components', foreignKey: 'ingredient' , through: 'ingredients_self' } );
    models.Ingredient.hasOne(Ingredient, {as: 'parent'});
  }
  
  return Ingredient;
};
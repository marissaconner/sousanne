'use strict';

module.exports = function( sequelize, DataTypes ) {
  const Food = sequelize.define( 'Food', 
    //attributes
    {
      name: {
        type: DataTypes.STRING(250),
        unique: true,
      },
    },
    //options
    {
      tableName: 'Foods',
    });

  Food.associate = function( models ){
    models.Food.belongsToMany( Food, { as: 'components', foreignKey: 'Food' , through: 'b_foods_self' } );
    models.Food.hasOne(Food, { as: 'parent' } );
    models.Food.hasMany( models.Ingredient );
  }
  
  return Food;
};
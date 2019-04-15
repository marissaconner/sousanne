'use strict';

module.exports = function( models ) {
  

  models.Ingredient.findOrCreate({
    where: {
      name: 'Pork'
    }
  });

  models.Ingredient.findOrCreate({
    where: {
      name: 'Shellfish'
    }
  });

  models.User.findOrCreate({ 
    where: {
      username: 'kosheruser',
      password: '12345678',
      email: 'marissafromtexas@gmail.com',
      user_type: 1
    }
  })
  .then( function( addrestriction ){
    models.Ingredient.findOrCreate({name: 'Pork'}).then( function( restriction ){
      addrestriction.addTag( restriction );
    });
  });

}
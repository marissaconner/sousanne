'use strict';

module.exports = function( models ) {
  
  models.User.findOrCreate({ 
    where: {
      username: 'testuser',
      password: '12345678',
      email: 'marissafromtexas@gmail.com',
      user_type: 1
    }
  });
}
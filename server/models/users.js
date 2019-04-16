'use strict';

const bcrypt = require( 'bcryptjs-then' );
const SALT_WORK_FACTOR = 10;

module.exports = function( sequelize, DataTypes ) {
  var User = sequelize.define( 'User', {
    // Uncomment the following lines to specify 'user_id'
    // rather than 'id' as the primary key:
    // userId: {
    //   type: Sequelize.INTEGER,
    //   field: 'user_id',
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    //arbitrarily, 1=basic user 5=super admin.
    user_type: { type: DataTypes.INTEGER,  defaultValue: 1},
    email_verified: { type: DataTypes.BOOLEAN, defaultValue: 0},
    email_verification_code: DataTypes.STRING,
    password_verification_code: DataTypes.STRING,
    forgot_password_timestamp: DataTypes.DATE(0),
    email_verification_code: DataTypes.STRING
   //arbitrarily, 1=basic user 5=super admin.
  },
  {
    instanceMethods: {
      validPassword: function ( password ) {
        return bcrypt.compare( password, this.get( 'password' ) );
      },
      changePassword: function ( password ) {
        bcrypt.hash( password, SALT_WORK_FACTOR )
          .then( function( hash ) {                
            this.set( 'password', hash );
            this.save();
            console.log(this.getDataValue('password'));
          }.bind(this));
          

      }
    },
    tableName: 'users'
  });

  User.associate = function( models ){
    models.User.belongsToMany( models.Ingredient, { as: 'restrictions', foreignKey: 'user' , through: 'ingredients_users_restrictions' } );
  }

  /* Set a hook: before creating a row in the User table,
  hash the given password. Never store the raw text. */

  User.beforeCreate( 'passHash', function( user, options ) {
    return bcrypt.hash( user.password, SALT_WORK_FACTOR )
    .then( function( hash ) {
      user.set( 'password', hash );
    })
    .catch( function( error ) {
      console.error( error );
    });
  });

  return User;
};

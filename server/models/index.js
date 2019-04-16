
/* This code reads all other files in the current folder,
which should be model definitions for the sequelize ORM. */

'use strict';

var fs        = require( "fs" );
var path      = require( "path" );
var Sequelize = require( "sequelize" );
var sequelize = require( '../lib/sequelize' );
var db        = {};

fs
  .readdirSync( __dirname )
  .filter( function( fileName ) {
    return ( fileName.indexOf( "." ) !== 0 ) && ( fileName !== "index.js" );
  } )
  .forEach( function( fileName ) {
    var model = sequelize.import( path.join( __dirname, fileName ));
    db[model.name] = model;
    /*
     db = {
     'ingredients': {
          name: associate:
      },
     'users': usersModel }
     */
  } );

 
  Object.keys( db ).forEach( function( modelName ) {
  if ( db[modelName].associate ) {
    console.log("associate found" + db[modelName]);
    db[modelName].associate( db );
  } else { 
    console.log("no associate found"); 
    console.log( db[modelName] );
  }
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

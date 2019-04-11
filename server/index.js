'use strict'; 

const app = require( './app' );
const initTableData = require( './lib/initTableData.js' );
const models = require( './models' );
const sequelizeOptions = {};

const http = require( 'http' ).Server( app ); 

const warnUnsetVars = function ( vars ){
  let didWarn = false;
  let warningString = '';
  vars.forEach( function( envVar ){
    if( !process.env[envVar] ) {
      didWarn = true;
      warningString += '\n You have not set your' + envVar + 'environment variable! Please set it! You can use `export ' + envVar + '=<text>` to set it.';
    }
  });
  if( didWarn ){
    console.log( 'WARNING:', warningString );
  }
}

warnUnsetVars( ['PORT' , 'JWT_SECRET' , 'SQLUSER' , 'SQLPASSWORD' , 'SQLPORT' , 'SQLDATABASE' ] );
process.env.JWT_SECRET = process.env.JWT_SECRET || 'shamalamadingdong'; 
app.set( 'port', process.env.SQLPORT || 3000 );

/* If force_truncate is true, Sequelize will be instructed to drop all tables and re-add them when the server starts. */
if( process.env.FORCE_TRUNCATE === 'true' ){
  sequelizeOptions.force = true;
  } else {
  sequelizeOptions.force = false;
  }
  
models.sequelize.sync(sequelizeOptions).then( () => {
  var server = http.listen( app.get( 'port' ), () => {
    console.log( 'Listening on ' + server.address().port );
    if(process.env.USE_INIT_TABLE_DATA === 'true') {
      initTableData(models);
    }
  });
})
.catch( ( error ) => {
  console.error( error );
});
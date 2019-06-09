const models = require( '../models' ); 
const Store = models.Store;

module.exports = {

  getAllStores: function( req, res ){
    console.log("Stores list requested");
    Store.findAll({
      //include things here
    })
    .then( function( data ){
      if( data === null ) {
        res.status( 404 ).send( 'No stores found' );
        return null;
      }
      res.json( data );
    })
    .catch( function( error ) {
      return error;
    });
  },

}
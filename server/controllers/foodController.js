const models = require( '../models' ); 
const Food = models.Food;

module.exports = {

  getAllFoods: function( req, res ){
    console.log("Foods list requested");
    Food.findAll({
      //include things here
    })
    .then( function( data ){
      if( data === null ) {
        res.status( 404 ).send( 'No recipes found' );
        return null;
      }
      res.json( data );
    })
    .catch( function( error ) {
      return error;
    });
  },

}
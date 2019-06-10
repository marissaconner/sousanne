const models = require( '../models' ); 
const Food = models.Food;
const Package = models.Package;
const Op = models.Sequelize.Op;
const Unit = models.Unit;

module.exports = {

  getBulkUnits: function( req, res ){
    Unit.findAll({
      where: {
        commonpackaging: true
      }
    })
    .then( function( data){
      if( data === null ){
        res.status(404).send('No units found');
        return null;
      }
      res.json( data );
    })
    .catch( function( error ){
      return error;
    })
  },

  getAllUnits: function( req, res ){
    Unit.findAll({})
    .then( function( data){
      if( data === null ){
        res.status(404).send('No units found');
        return null;
      }
      res.json( data );
    })
    .catch( function( error ){
      return error;
    })
  },

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

  getFood: function( req, res ){
    console.log( "Get Food");
    var food = {};
    var products = [];
    const input = req.params.food;
    var safeinput = null;
    if( isNaN( input ) ){
      safeinput = input.replace( /[^\w\s]/gi, '' );
    }
    else {
      safeinput = input;
    }

    Food.findOne({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.eq]: safeinput
            }
          },
          {
            id: {
              [Op.eq]: safeinput
            }
          }
        ]
      },
      include: [
        Package
      ]
    })
    .then( function( food ){
      if( food === null ){
        res.status( 404 ).send( 'No such food as ' + safeinput );
        return null;
      } 
      res.json( food );
    })
    .catch( function( error ){
      console.log( error );
      res.status( 500 ).send( error );
    })
  },
}
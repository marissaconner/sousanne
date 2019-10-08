const models = require( '../models' ); 
const Food = models.Food;
const Package = models.Package;
const Op = models.Sequelize.Op;
const Unit = models.Unit;
var Sequelize = require( '../lib/sequelize' );

function cleanInput( input ){
    var safeinput = null;
    if( isNaN( input ) ){
      safeinput = input.replace( /[^\w\s]/gi, '' );
    }
    else {
      safeinput = input;
    }
    return safeinput;
  }

module.exports = {

  getLastChildren: function( req, res ){
    //There's gotta be a cleaner way to do this but for now...
    Sequelize.query( 
      'select name, id from foods WHERE id NOT IN ( SELECT parent_id FROM foods WHERE parent_id IS NOT NULL )',
      {type: Sequelize.QueryTypes.SELECT})
      .then(( results , metadata ) =>{
          res.json( results )
      })
      .catch(function( error){
          return error;
      })
  },

  searchFood: function( req, res ){

    const safeinput = cleanInput( req.params.food );

    if( isNaN(safeinput)){

    Food.findAll({
      where: {
        name: {
        [Op.like] : '%' + safeinput + '%'
        }
      }
    })
    .then( function( data){
      if( data === null ){
        res.status(404).send('No food found');
        return null;
      }
      res.json( data );
    })
    .catch( function( error ){
      return error;
    })
  }

    else {
      Food.findOne({
        where: {
          id: safeinput
        }
      })
      .then( function( data){
        if( data === null ){
          res.status(404).send('No food found');
          return null;
        }
        res.json( data );
      })
      .catch( function( error ){
        return error;
      })
    }
  },

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
    const safeinput = cleanInput( req.params.food );
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
      }
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
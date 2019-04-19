const models = require( '../models' ); 
const Recipe = models.Recipe;
const Ingredient = models.Ingredient;
const Instruction = models.Instruction;
const Food = models.Food;
const Unit = models.Unit;

module.exports = {

  getAllRecipes: function( req, res ){
    console.log("Recipes list requested");
    Recipe.findAll({
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

  getIngredient: function( req, res ){
    console.log( "Get Ingredient");
    Ingredient.findOne({
      where: {
        id: req.params.ingredient
      },
      include: [
        { 
          model: Food,
          as: 'food'
        },
        {
          model: Unit,
          as: 'unit'
        }
      ]
    })
    .then( function( ingredient ){
      if( ingredient === null ){
        res.status( 404 ).send( 'No such ingredient.' );
        return null;
      } 
      res.json( ingredient );
    })
    .catch( function( error ){
      console.log( error );
      res.status( 500 ).send( error );
    })
  },


  getRecipe: function( req, res ){
    var recipe = {};
    var foods = [];
    const input = req.params.recipe;
    const safeinput = input.replace( /[^\w\s]/gi, '' );
    Recipe.findOne({
      where: {
        name: safeinput
      },
      include: [ 
        Instruction, 
        Ingredient,
      ]
    })
    .then( function( data ){
      if( data === null ){
        res.status( 404 ).send( 'No such recipe' + recipe );
        return null;
      }
      res.json( data ); 
    })
    .catch( function( error ){
      console.log( error );
      res.status( 500 ).send( error );

    })
  }
}
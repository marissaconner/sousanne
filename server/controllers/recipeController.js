const models = require( '../models' ); 
const Recipe = models.Recipe;
const Ingredient = models.Ingredient;
const Instruction = models.Instruction;

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
    .catch( function( err ) {
      return err;
    });
  },

  getRecipe: function( req, res ){
    const input = req.params.recipe;
    console.log("request is for:");
    console.log( input );
    const safeinput = input.replace( /[^\w\s]/gi, '' );
    Recipe.findOne({
      where: {
        name: safeinput
      },
      include: [ 
        Instruction, 
        Ingredient
      ]
    })
    .then( function( recipe ){
      if( recipe === null ){
        res.status( 404 ).send( 'No such recipe' + recipe );
        return null;
      }
      res.json( recipe );
    })
    .catch( function( err ){
      res.status( 404 ).send( 'No such recipe' + err );
    })
  }
  
}
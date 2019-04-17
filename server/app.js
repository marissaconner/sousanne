const express = require( 'express' );
const path = require( 'path' );
const app = express();
const models = require( './models' ); 
const Recipe = models.Recipe;
const Ingredient = models.Ingredient;
const Instruction = models.Instruction;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/../build')));

app.get('/api/getRecipes', (req,res) => {
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
});

app.get('/api/getRecipe/:recipe', (req,res)=>{
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
});

app.get('*', (req,res) =>{
  console.log('page request');
    res.sendFile(path.join(__dirname+'/../public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);

module.exports = app;
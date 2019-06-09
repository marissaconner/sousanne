const express = require( 'express' );
const path = require( 'path' );
const app = express();
const models = require( './models' ); 
const storeController = require('./controllers/storeController');
const recipeController = require('./controllers/recipeController');
const foodController = require('./controllers/foodController');

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/../build')));

app.get('/api/recipes' , recipeController.getAllRecipes );
app.get('/api/recipes/:recipe', recipeController.getRecipe );

app.get('/api/ingredients/:ingredient', recipeController.getIngredient );

app.get('/api/stores', storeController.getAllStores );

app.get('/api/foods', foodController.getAllFoods );
app.get('/api/food/:food', foodController.getFood ); 

app.get('*sousanne.css', (req,res) =>{
  res.sendFile(path.join(__dirname+'/../public/sousanne.css'));
});

app.get('*', (req,res) =>{
  console.log('page request');
    res.sendFile(path.join(__dirname+'/../public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);

module.exports = app;
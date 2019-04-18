const express = require( 'express' );
const path = require( 'path' );
const app = express();
const models = require( './models' ); 
const recipeController = require('./controllers/recipeController');


// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/../build')));

app.get('/api/getRecipes' , recipeController.getAllRecipes );

app.get('/api/getRecipe/:recipe', recipeController.getRecipe );

app.get('*', (req,res) =>{
  console.log('page request');
    res.sendFile(path.join(__dirname+'/../public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);

module.exports = app;
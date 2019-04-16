const express = require( 'express' );
const path = require( 'path' );
const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/../build')));

app.get('/api/getList', (req,res) => {
    console.log('Put together some data and send it');
    res.json( ['milk' , 'eggs' , 'bread'] );
});

app.get('/api/getRecipes', (req,res) => {
  console.log("Recipes list requested");
  res.json( ['test', 'test2', 'test3']);
});

app.get('*', (req,res) =>{
  console.log('page request');
    res.sendFile(path.join(__dirname+'/../public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);

module.exports = app;
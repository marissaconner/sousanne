const express = require( 'express' );
const path = require( 'path' );
const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

require( './routes' )( app,express );

module.exports = app;
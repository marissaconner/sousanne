'use strict';
const path = require('path');

module.exports = function( app, express ) {
  app.get( '/' , function ( req, res ) {
    res.send('Hello, World!');
})
}
'use strict';

module.exports = function( models ) {

const recipes = ['Nachos', 'Tacos', 'Enchiladas', 'Picadillo'];

for( var i = 0; i < recipes.length; i++ ){
models.Recipe.findOrCreate({
    where: {
      name: recipes[i]
    }
  })
}

}


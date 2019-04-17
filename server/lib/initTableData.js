'use strict';

module.exports = function( models ) {

const recipes = ['Nachos', 'Tacos', 'Enchiladas', 'Picadillo'];

const foods = [
  'Corn Tortillas',
  'Ground Beef',
  'Yellow Onion',
  'Taco Seasoning',
  'Enchilada Sauce',
  'Cheddar Cheese',
  'Monterey Jack Cheese'
]

const units = [
  'pound',
  'item',
  'tablespoon',
  'cup'
]

for( var i = 0; i < recipes.length; i++ ){
models.Recipe.findOrCreate({
    where: {
      name: recipes[i]
    }
  })
}

for( var i = 0; i < foods.length; i++ ){
models.Food.findOrCreate({
    where: {
      name: foods[i]
    }
  })
}

for( var i = 0; i < units.length; i++ ){
models.Unit.findOrCreate({
    where: {
      name: units[i]
    }
  })
}

models.Recipe.findOrCreate({
    where: {
      name: 'Enchiladas'
    }
  })
  .then( function( recipe ){
    for( var i = 0; i < foods.length; i++ ){
      models.Food.findOrCreate({
        where: {
          name: foods[i]
        }
      })
      .then( function( ingredient ){
        console.log( ingredient[0].name + " goes into " + recipe[0].name );
        models.Ingredient.findOrCreate({
          where: {
            foodId: ingredient[0].id,
            recipeId: recipe[0].id
          }
        })
      })
    }
  })

}


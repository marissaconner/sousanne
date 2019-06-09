'use strict';

module.exports = function( models ) {

  const stores = [
  'Lucky',
  'Whole Foods',
  'Sprouts',
  'Grocery Outlet',
  'FoodMaxx'
  ];

  const fakerecipes = ['Nachos', 'Tacos', 'Picadillo'];

  const foods = [
  'Corn Tortillas',
  'Ground Beef',
  'Yellow Onion',
  'Taco Seasoning',
  'Enchilada Sauce',
  'Cheddar Cheese',
  'Monterey Jack Cheese'
  ];

  const units = [
  'pound',
  'item',
  'tablespoon',
  'cup'
  ];

  const recipebook = [
  {
    name: 'Enchiladas',
    prep: 900,
    cook: 1800,
    preheat: 350,
    ingredients: [
      {
        name: 'Corn Tortillas',
        unit: 'item',
        amount: 8
      },
      {
        name: 'Ground Beef',
        unit: 'pound',
        amount: 1
      },
      {
        name: 'Yellow Onion',
        unit: 'cup',
        amount: 1.5,
        comment: 'diced'
      },
      {
        name: 'Taco Seasoning',
        unit: 'tablespoon',
        amount: 1
      },
      {
        name: 'Enchilada Sauce',
        unit: 'cup',
        amount: 2
      },
      {
        name: 'Cheddar Cheese',
        unit: 'cup',
        amount: 1,
        comment: 'shredded'
      },
      {
        name: 'Monterey Jack Cheese',
        unit: 'cup',
        amount: 1,
        comment: 'shredded'
      }
    ],
    instructions: [
      'Cook the onion and ground beef together with the taco seasoning.',
      'Fill each tortilla with ground beef and cheese.',
      'Roll the tortillas up and put them in a baking dish.',
      'Top with enchilada sauce and extra cheese.',
      'Bake for 30 mintues.'
    ]
  }
  ];



for( var i = 0; i < stores.length; i++ ){
    models.Store.findOrCreate({
    where: {
      name: stores[i]
    }
  })
};

for( var i = 0; i < recipebook.length; i++ ){
    var currRecipe = recipebook[i];
    models.Recipe.findOrCreate({
    where: {
      name: currRecipe.name,
      preheat: currRecipe.preheat,
      prep: currRecipe.prep,
      cook: currRecipe.cook,
    }
  })
  .then( function( thisRecipe ){
    console.log( "\n\n\n\nLEEEEEEEEEEEEEROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOYYYYYY");
    var recipedata = thisRecipe[0];

    for( var add = 0; add < currRecipe.ingredients.length; add++ ){
      var currFood = currRecipe.ingredients[add];
      console.log('\n\n\nCURRENT INGREDIENT TO ADD:' + currFood.name );

      models.Food.findOrCreate({
        where: {
          name: currFood.name
        }
      })
      .then( function( food ){
        var fooddata = food[0];
        models.Unit.findOrCreate(
        {
          where: {
            name: currFood.unit
          }
        })
        .then(function(unit){
          var unitdata = unit[0];

            models.Ingredient.findOrCreate({
            where: {
              recipeId: recipedata.id,
              foodId: fooddata.id,
              amount: currFood.amount,
              unitId: unitdata.id,
              comment: currFood.comment
            }
          })
        })
     });

    for( var step = 0; step < currRecipe.instructions.length; step++){
      var currStep = currRecipe.instructions[step];
      models.Instruction.findOrCreate({
        where: {
          recipeId: recipedata.id,
          index: step,
          instruction: currStep
        }
      })
    }

  }
});
}

for( var i = 0; i < fakerecipes.length; i++ ){
models.Recipe.findOrCreate({
    where: {
      name: fakerecipes[i]
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

}
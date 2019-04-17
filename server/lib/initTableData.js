'use strict';

module.exports = function( models ) {

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
        ingredient: 'Corn Tortillas',
        unit: 'item',
        amount: 8
      },
      {
        ingredient: 'Ground Beef',
        unit: 'pound',
        amount: 1
      },
      {
        ingredient: 'Yellow Onion',
        unit: 'cup',
        amount: 1.5
      },
      {
        ingredient: 'Taco Seasoning',
        unit: 'tablespoon',
        amount: 1
      },
      {
        ingredient: 'Enchilada Sauce',
        unit: 'cup',
        amount: 2
      },
      {
        ingredient: 'Cheddar Cheese',
        unit: 'cup',
        amount: 1
      },
      {
        ingredient: 'Monterey Jack Cheese',
        unit: 'cup',
        amount: 1
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


for( var i = 0; i < recipebook.length; i++ ){
    var currRecipe = recipebook[i];
    models.Recipe.findOrCreate({
    where: {
      name: currRecipe.name
    }
  })
  .then( function( currentrecipe ){
    console.log( "\n\n\n\nLEEEEEEEEEEEEEROOOOOOOOOOOOOOOOOOOOOOOOOOOOOOYYYYYY");
    var recipedata = currentrecipe[0];
   
    for( var step = 0; step < currRecipe.instructions.length; step++){
      var currentStep = currRecipe.instructions[step];
      models.Instruction.findOrCreate({
        where: {
          recipe_id: recipedata.id,
          index: step,
          instruction: currentStep
        }
      })
    }
  })
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
'use strict';

module.exports = function( models ) {

  const ingredients = [
    {
      name: 'Plant-Based Products',
      children: [
        {
          name: 'Grains',
          children: [
            {
              name: 'Gluten-Free Grains',
              children: [
                {
                  name: 'Corn'
                }
              ]
            },
            {
              name: 'Gluten-Containing Grains'
            }
          ]
        },
        
      ]
    },
    {
      name: 'Meat And Animal Products',
      children: [
        {
          name: 'Seafood',
          children: [
            {
              name: 'Fish',
              children: [
                {
                  name: 'Salmon'
                },
                {
                  name: 'Trout'
                },
              ]
            }
          ]
        },
        {
          name: 'Beef'
        }
      ]
    }
  ];

 

  function newChildFood( item, id ){
    models.Food.findOrCreate({ 
      where: {
        name: item.name,
        parentId: id
      }
    })
    .then( function( data ){
      return data;
    })
  };

 

  /*
  "ingredients" is an array of objects with children in them like: 
  ingredients: 
  [
    { 
      name: 'meats', 
      children: [
        { name: 'beef' } , 
        {
          name: 'poultry', 
          children: [ 
             {name: 'chicken'},
             {name: 'turkey'}
          ]
        }
      ]
    }
  ]
  */

  function newChildFood( item , id ){
    console.log("Running new child food.\r\n\r\n");
    models.Food.findOrCreate({ 
      where: {
        name: item.name,
        parentId: id
       }
    })
    .then( function( data ){
      return data[0].dataValues.id;
    })
  };

  async function createFood( item ){
    await new Promise( r=> setTimeout(r,250));
    const newFood = models.Food.findOrCreate({ 
      where: {
        name: item.name,
       }
    });

    if( newFood ){
      return newFood;
    } else {
      throw Error('Error creating food');
    }
  }

  async function createChildFood( item, id ){
    await new Promise( r=> setTimeout(r,250));
    const newFood = models.Food.findOrCreate({ 
      where: {
        name: item.name,
        parentId: id
       }
    });

    if( newFood ){
      return newFood;
    } else {
      throw Error('Error creating food');
    }
  }

  async function addChildFoods( foods, id ){
    console.log("\r\n\r\n\r\nChild Food Array")

    for( var i = 0; i < foods.length; i++ ){
      if( foods[i].hasOwnProperty('children')){
        const childFood = await createChildFood( foods[i] , id );
        const newId = childFood[0].dataValues.id; 
        addChildFoods( foods[i].children, newId );
      } else {
        createChildFood( foods[i] , id );
      }
    }
  };
  
  async function addfoods( foodarray ){
    for( var i = 0; i < foodarray.length; i++ ){
      if( foodarray[i].hasOwnProperty('children') ){        
        const parentFood = await createFood( foodarray[i]);
        const id = parentFood[0].dataValues.id;
        addChildFoods( foodarray[i].children , id ); 
      } else {
        createFood(foodarray[i]);
      }
    }
  }


  addfoods( ingredients );
}
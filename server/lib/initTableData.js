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

  function newFood( item ){
    console.log( "running NewFood!!\r\n\r\n\r\n");
    models.Food.findOrCreate({ 
      where: {
        name: item.name,
       }
    })
    .then( function( data ){
      return data[0].dataValues.id;
    })
  };


  async function addfoods( foodarray ){
    for( var i = 0; i < foodarray.length; i++ ){
      console.log( "Iteration starting", i );

      if( foodarray[i].hasOwnProperty('children') ){        
        console.log("children found");
        let parentFood = await newFood( foodarray[i]); 
      }

      else { newFood(foodarray[i]); }
    }
  }
    
  addfoods( ingredients );
}
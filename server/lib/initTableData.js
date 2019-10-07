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

  function installChildIngredient( item , parentId ){
    //We are getting an array that has grains in it  and 1 

    models.food.findOrCreate({
      where: {
        name: item.name,
        parentId: parentId
      }
      //we made grains now with parent id 1
    })
    .then( function( newParent ){ //that returns an object so lets say grains is id 2
      if( item.hasOwnProperty( 'children' ) ){ //it does
        const childArray = newParent.children;  //so we have an array w gluten free and nongluten
        for( var i = 0; i < childArray.length; i++ ){
          installChildIngredient( childArray[i] , newParent.id );
        }
      }
    })
  };

  function installIngredients( items ){
    for( var i = 0; i < items.length; i++ ){
      console.log( "I am looking at items" , items[i] );
      parentItem = items[i]
      models.Food.findOrCreate({
        where: {
          name: parentItem.name,
        }
      })
      .then( function ( parent ){
        console.log( "checking for children at installIngredients" , i );
        console.log( parentItem ); 
        if( parentItem.hasOwnProperty( 'children' ) ) {
          //it does
          installChildIngredient( parentItem.children , parent.id );
        }
      })
    }
  }; 

  installIngredients( ingredients );

}
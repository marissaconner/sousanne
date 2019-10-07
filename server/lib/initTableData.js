'use strict';

module.exports = function( models ) {

  const ingredients = [
  {
    name: 'Plant-Based Products',
    children: [
      {
        name: 'Vegetables'
      },
      {
        name: 'Fruits'
      },
      {
        name: 'Grains',
        children: [
          {
            name: 'Gluten Grains',
            children: [
              {
                name: 'Wheat',
                children: [
                  {
                    name: 'Spelt'
                  },
                  {
                    name: 'Kamut'
                  },
                  {
                    name: 'Farro'
                  },
                  {
                    name: 'Durum',
                    children: [
                      {
                        name: 'Bulgur'
                      },
                      {
                        name: 'Semolina'
                      }
                    ]
                  },
                ]
              },
              {
                name: 'Barley'
              },
              {
                name: 'Rye'
              },
              {
                name: 'Triticale'
              },
            ]
          },
          {
            name: 'Gluten-Free Grains',
            children: [
              {
                name: 'Indian Ricegrass',
              },
              {
                name: 'Chinese Pearl Barley'
              },
              {
                name: 'Sorghum', 
              },
              {
                name: 'Quinoa',
              },
              {
                name: 'Oats',
              },
              {
                name: 'Buckwheat',
              },
              {
                name: 'Amaranth ',
              },
              {
                name: 'Teff'
              },
              {
                name: 'Rice',
                chidren: [
                  {
                    name: 'Wild Rice'
                  },
                  {
                    name: 'Brown Rice'
                  },
                  {
                    name: 'White Rice'
                  }
                ]
              },
              {
                name: 'Millet', 
              },
              {
                name: 'Corn',
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Animal Products',
    children: [
      {
        name: 'Meats',
        children: [
          {
            name: 'Beef'
          },
          {
            name: 'Pork'
          },
          {
            name: 'Horse'
          },
          {
            name: 'Venison'
          },
          {
            name: 'Sheep'
          },
          {
            name: 'Goat'
          },
          {
            name: 'Boar'
          },
          {
            name: 'Rabbit'
          },
          {
            name: 'Elk'
          },
          {
          name: 'Poultry',
          children: 
            [
              {
                name: 'Chicken',
              },
              {
                name: 'Duck'
              },
              {
                name: 'Goose'
              },
              {
               name: 'Turkey'
              },
              {
                name: 'Quail'
              },
              {
                name: 'Squab'
              },
              {
                name: 'Pheasant'
              },
              {
                name: 'Dove'
              },
            ]
          },
        ]
      },
      {
        name: 'Fish'
      },
      {
        name: 'Dairy',
        children: [
          {
            name: 'Butter'
          },
          {
            name: 'Cheese'
          },
          {
            name: 'Cow Milk'
          }
        ]
      },
      {
        name: 'Eggs',
        children: [
          {
            name: 'Chicken Egg'
          },
          {
            name: 'Quail Egg'
          },
          {
            name: 'Duck Egg'
          }
        ]
      },
      {
        name: 'Honey'
      },
      {
        name: 'Fish Roe'
      }
    ]
  }
];

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
  console.log("Init");
  addfoods( ingredients );
}
'use strict';

module.exports = function( models ) {

    const food = [
        {
          name: 'Meat',
          children: [
              {
                name: 'Beef',
                children: [
                  {
                    name: '85/15 Ground Beef'
                  },
                  {
                    name: 'Sirloin'
                  },
                  {
                    name: 'Brisket'
                  }
                ]
              },
              {
                name: 'Chicken'
              },
              {
                name: 'Fish and Seafood',
                children: [
                  {
                    name: 'Fish'
                  },
                  {
                    name: 'Shellfish'
                  }
                ]
              },
              {
                name: 'Pork',
                children: [
                  {name: 'Bacon'},
                  {name: 'Pork Chops'}
                ]
              }
          ]
        },
        {
          name: 'Grains'
        },
        {
          name: 'Fruit'
        },
        {
          name: 'Vegetables'
        }
    ]

    models.User.findOrCreate({
      where: {
        name: 'kosheruser',
        password: '12345678',
        email: 'marissafromtexas@gmail.com',
        user_type: 1
      }
    });
}


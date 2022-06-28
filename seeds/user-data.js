const { User } = require('../models');

const userData = [
  {
    
    username: 'luke',
    email: 'luke@gmail.com',
    password: 'password123'
  },
  {
   
    username: 'julian',
    email: 'julian@dogs.com',
    password: 'password1234'
  },
  {
    
    username: 'kayla',
    email: 'kayla@gmail.com',
    password: 'password321'
  },
  {
    
    username: 'margo',
    email: 'margo@cats.com',
    password: 'iamacat'
  },
  {
    
    username: 'loke',
    email: 'loke@gmail.com',
    password: 'lokepassword'
  },
  {

    username: 'test5',
    email: 'test5@gmail.com',
    password: 'testing123'
  }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;
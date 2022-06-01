const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = [
  {
    
    username: 'luke',
    email: 'luke@gmail.com',
    password: '1234'
  },
  {
   
    username: 'julian',
    email: 'julian@dogs.com',
    password: '1234'
  },
  {
    
    username: 'kayla',
    email: 'kayla@gmail.com',
    password: '4321'
  },
  {
    
    username: 'margo',
    email: 'margo@cats.com',
    password: 'iamacat'
  },
  {
    
    username: 'loke',
    email: 'loke@gmail.com',
    password: 'luke2'
  },
  {

    username: 'test5',
    email: 'test5@gmail.com',
    password: '123'
  }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;
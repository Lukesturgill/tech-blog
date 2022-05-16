const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = [
  {
    user_id: 1,
    username: 'luke',
    email: 'luke@gmail.com',
    password: '1234'
  },
  {
    user_id: 2,
    username: 'julian',
    email: 'julian@dogs.com',
    password: '1234'
  },
  {
    user_id: 3,
    username: 'kayla',
    email: 'kayla@gmail.com',
    password: '4321'
  },
  {
    user_id: 4,
    username: 'margo',
    email: 'margo@cats.com',
    password: 'iamacat'
  },
  {
    user_id: 5,
    username: 'loke',
    email: 'loke@gmail.com',
    password: 'luke2'
  },
  {
    user_id: 6,
    username: 'test5',
    email: 'test5@gmail.com',
    password: '123'
  }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;
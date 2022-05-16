const sequelize = require('../config/connection');
const seedUsers = require('./user-data');
const seedPosts = require('./post-data');
const seedComments = require('./comment-data');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedComments();

  await seedPosts();

  await seedUsers();

  process.exit(0);
};

seedAll();

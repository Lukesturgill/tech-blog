const { Post } = require('../models');

const postData = [
  {
    user_id: 1,
    title: 'Best TV brands',
    contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    
  },
  {
    user_id: 1,
    title: 'JavaScript tips',
    contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    
  },
  {
    user_id: 2,
    title: 'VSCode Tips',
    contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    
  },
  {
    user_id: 2,
    title: 'Another Question',
    contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    
  },
  {
    user_id: 3,
    title: 'I love tech!',
    contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    
  },
  {
    user_id: 3,
    title: 'New IPhone leak',
    contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    
  },
  {
    user_id: 4,
    title: 'Mac vs PC?',
    contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    
  },
  {
    user_id: 4,
    title: 'Xbox vs PlayStation',
    contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    
  },
  {
    user_id: 5,
    title: 'iOS 16',
    contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
    
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;

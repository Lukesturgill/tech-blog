const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'Comment test.',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'Great feedback!',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'Check on Stack.',
    user_id: 4,
    post_id: 2
  },
  {
    comment_text: 'Good question.',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'Ill update you ASAP.',
    user_id: 1,
    post_id: 3
  },
  {
    comment_text: 'good question.',
    user_id: 2,
    post_id: 3
  },
  {
    comment_text: 'Ill ask on Stack.',
    user_id: 2,
    post_id: 4
  },
  {
    comment_text: 'Great feedback.',
    user_id: 1,
    post_id: 3
  },
  {
    comment_text: 'Thank you.',
    user_id: 2,
    post_id: 1
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;

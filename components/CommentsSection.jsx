const React = require('react');

function CommentsSection({ comment }) {
  console.log(comment);
  return <div>{comment.text}</div>;
}

module.exports = CommentsSection;

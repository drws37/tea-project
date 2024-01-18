const React = require('react');
const CommentItem = require('./CommentItem');

function CommentsProfile({ comments }) {
  return (
    <>
      {comments.map((comment) => (<CommentItem key={comment.id} text={comment.text} Tea={comment.Tea} />))}
    </>

  );
}

module.exports = CommentsProfile;

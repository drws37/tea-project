const React = require('react');

function CommentsList({ comments, users }) {
  return (
    <div className="commentsList">
      {(comments.map((com) => {
        const [user] = users.filter((el) => el.id === com.user_id);
        return (
          <div className="commentInList">
            <h5>{user.name}</h5>
            <div className="comment-text">{com.text}</div>
            <div className="comment-date">{com.createdAt.toString().slice(0, 25)}</div>
          </div>
        );
      }).reverse())}
    </div>
  );
}

module.exports = CommentsList;

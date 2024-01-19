const React = require('react');

function CommentsList({ comments, users }) {
  return (
    <div className="commentsList">
      {(comments.map((com) => {
        const [user] = users.filter((el) => el.id === com.user_id);
        return (
          <>
            <h5>{user.name}</h5>
            <div>{com.text}</div>
            <div>{com.createdAt.toString().slice(0, 25)}</div>
          </>
        );
      }).reverse())}
    </div>
  );
}

module.exports = CommentsList;

const React = require('react');

function CommentItem({ text, Tea }) {
  return (
    <div className="container profile-main">
      <div className="comments">
        <div className="comments-header">{Tea.title}</div>
        <div className="comments-body">{text}</div>
      </div>
    </div>

  );
}

module.exports = CommentItem;

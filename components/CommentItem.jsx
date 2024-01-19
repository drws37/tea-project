const React = require('react');

function CommentItem({ text, Tea }) {
  return (
    <div className="comments">
      <div className="comments-header">
        <h4>
          <a href={`/tea/${Tea.id}`}>{Tea.title}</a>
        </h4>
      </div>
      <div className="comments-body">
        <p>{text}</p>
      </div>
    </div>
  );
}

module.exports = CommentItem;

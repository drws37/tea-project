const React = require('react');
const Layout = require('./Layout');

function CommentsBar({ user, tea, comment }) {
  return (
    <div className="mb-3">
      <form id={tea.id} className="newComment">
        <h5>Оставить комментарий</h5>
        <input
          name="comment"
          type="text"
          className="form-control addComentForm"
          aria-describedby="emailHelp"
        />
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    </div>
  );
}

module.exports = CommentsBar;

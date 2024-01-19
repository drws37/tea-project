const React = require('react');
const Layout = require('./Layout');

function CommentsBar({ user, tea, comment }) {
  return (
    <form id={tea.id} className="add-comments">
      <label>Ваш комментарий:</label>
      <input name="comment" type="text" />
      <button>Отправить</button>
      <div className="comments-container" />
    </form>
  );
}

module.exports = CommentsBar;

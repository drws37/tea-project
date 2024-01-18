const React = require('react');
const Layout = require('./Layout');

function ProfilePage({ title, user, teas }) {
  return (
    <div className="container profile-main">
      <div className="profile-card">
        <img className="profile-pic" src="https://png.pngtree.com/png-vector/20190301/ourmid/pngtree-vector-administration-icon-png-image_747092.jpg" alt="" />
        <p>Name Name</p>
      </div>
      <div className="comments">
        <div className="comments-header">{teas[0].title}</div>
        <div className="comments-body">Здесь будет комментарий</div>
      </div>

      { user.isAdmin(
        <div className="container teas-container">
          {teas.map((tea) => (
            <TeaItem key={tea.id} />
          ))}
        </div>,
      )}
    </div>

  );
}

module.exports = ProfilePage;

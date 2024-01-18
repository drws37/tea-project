const React = require('react');
const Layout = require('./Layout');
const NavBar = require('./NavBar');

function ProfilePage({ title, user, teas }) {
  return (
    <Layout user={user}>
      <div className="container profile-main">
        <div className="profile-card">
          <img className="profile-pic" src="https://png.pngtree.com/png-vector/20190301/ourmid/pngtree-vector-administration-icon-png-image_747092.jpg" alt="" />
          <p>Name Name</p>
        </div>
        <div className="comments">
          <div className="comments-header">{teas[0].title}</div>
          <div className="comments-body">Здесь будет комментарий</div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = ProfilePage;

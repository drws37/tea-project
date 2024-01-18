const React = require('react');
const Layout = require('./Layout');
const CommentsProfile = require('./CommentsProfile');

function ProfilePage({ user, title, comments }) {
  return (
    <Layout title={title} user={user}>
      <div className="container profile-main">
        <div className="profile-card">
          <img className="profile-pic" src={user.img} alt="" />
          <p>{user.name}</p>
        </div>
      </div>
      <div className="container profile-comments">
        <CommentsProfile comments={comments} />
      </div>
    </Layout>
  );
}

module.exports = ProfilePage;

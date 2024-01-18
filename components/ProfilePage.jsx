const React = require('react');
const Layout = require('./Layout');
const CommentsProfile = require('./CommentsProfile');

function ProfilePage({ user, title, comments }) {
  return (
    <Layout title={title}>
      <div className="container profile-main">
        <div className="profile-card">
          <img className="profile-pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s" alt="" />
          <p>{user.name}</p>
        </div>
        <CommentsProfile comments={comments} />
      </div>
    </Layout>
  );
}

module.exports = ProfilePage;

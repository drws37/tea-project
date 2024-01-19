const React = require('react');
const Layout = require('./Layout');
const CommentsProfile = require('./CommentsProfile');
const AddTeaForm = require('./AddForm');
const TeasListPage = require('./TeasListPage');

function ProfilePage({
  user, title, comments, teas,
}) {
  // console.log(user, 11111111111111);
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
      { (user.isAdmin) && (
        <>
          <AddTeaForm />
          <TeasListPage user={user} teas={teas} />
        </>

      )}
    </Layout>
  );
}

module.exports = ProfilePage;

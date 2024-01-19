const React = require('react');
const Layout = require('./Layout');
const CommentsBar = require('./CommentsBar');
const CommentsList = require('./CommentsList');

function TeaPage({ title, tea, user, comments, users }) {
  return (
    <Layout user={user} title={title} tea={tea}>
      <div className="container-tea">
        <div className="card">
          <img src={tea.img} className="card-img-top" alt=". . ." />
          <div className="card-body">
            <h5 className="card-title">{tea.title}</h5>
            <h6 className="card-title">{tea.place}</h6>
            <p className="card-text">{tea.description}</p>
          </div>
        </div>
        <div className="tea-comments">
          <CommentsBar key={tea.id} tea={tea} />
        </div>
        <CommentsList comments={comments} users={users} />
      </div>
    </Layout>
  );
}

module.exports = TeaPage;

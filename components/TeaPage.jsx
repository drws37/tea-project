const React = require('react');
const Layout = require('./Layout');
const CommentsBar = require('./CommentsBar');

function TeaPage({ title, tea, user }) {
  return (
    <Layout user={user} title={title} tea={tea}>
      <h1>Tea page</h1>
      <div className="card" style={{ width: '18rem', margin: '20px' }}>
        <img src={tea.img} className="card-img-top" alt=". . ." />
        <div className="card-body">
          <h5 className="card-title">{tea.name}</h5>
          <p className="card-text">{tea.description}</p>
        </div>
        <CommentsBar key={tea.id} tea={tea} />
      </div>
    </Layout>
  );
}

module.exports = TeaPage;
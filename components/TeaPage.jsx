const React = require('react');
const Layout = require('./Layout');
const CommentsBar = require('./CommentsBar');
const CommentsSection = require('./CommentsSection');
const { Comment } = require('../db/models');

function TeaPage({ title, tea, user }) {
  return (
    // <Layout user={user} title={title} tea={tea}>
    //   <h1>Tea page</h1>
    //   <div style={{ display: 'flex', alignItems: 'center' }}>
    //     <div
    //       className="card"
    //       style={{
    //         width: '18rem',
    //         margin: '20px',
    //         display: 'flex',
    //         alignItems: 'center',
    //       }}
    //     >
    //       <img
    //         src="https://a-kofe.ru/upload/iblock/281/2504.970.jpg"
    //         className="card-img-top"
    //         alt=". . ."
    //       />
    //       <div className="card-body">
    //         <h5 className="card-title">{tea.title}</h5>
    //         <p className="card-text">{tea.description}</p>
    //       </div>
    //       <CommentsBar key={tea.id} tea={tea} />
    //     </div>
    //   </div>
    // </Layout>
    <Layout user={user} title={title} tea={tea}>
      <h1>{tea.title} (чай)</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="img-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Assam_black_tea.jpg/274px-Assam_black_tea.jpg"
            alt=". . ."
          />
          <div>
            Вид: {tea.title} Происхождение: {tea.place}
          </div>
          <p>{tea.description}</p>
        </div>
        <CommentsBar tea={tea} />
        <CommentsSection comment={comment} />
      </div>
    </Layout>
  );
}

module.exports = TeaPage;

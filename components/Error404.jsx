const React = require('react');
const Layout = require('./Layout');

function Error404({ title }) {
  return (
    <Layout title={title}>
      <div className="AB">
        <h1>404 Толя недоволен!</h1>
        <img src="img/anatolyB.png" alt="404" />
      </div>
    </Layout>
  );
}

module.exports = Error404;

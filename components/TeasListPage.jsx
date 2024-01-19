const React = require('react');
// const Layout = require('./Layout');
const TeaItem = require('./TeaItem');

function TeasListPage({ teas, user }) {
  return (
    <div className="container teas-container" style={{ display: 'flex' }}>
      {teas.map((tea) => (
        <TeaItem tea={tea} />
      ))}
    </div>
  );
}

module.exports = TeasListPage;

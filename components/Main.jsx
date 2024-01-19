const React = require('react');
const Layout = require('./Layout');
const NavBar = require('./NavBar');
const Map = require('./Map');

function Main({ title, user }) {
  console.log(user);
  return (
    <Layout title={title} user={user}>
      <Map />
    </Layout>
  );
}

module.exports = Main;

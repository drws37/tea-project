const React = require("react");
const Layout = require("./Layout");
const NavBar = require("./NavBar");
const Map = require("./Map");

function Main() {
  return (
    <Layout>
      <NavBar />
      <Map />
    </Layout>
  );
}

module.exports = Main;

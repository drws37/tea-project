const React = require("react");
const Layout = require("./Layout");
const NavBar = require("./NavBar");

function Main() {
  return (
    <Layout>
      <NavBar />
      <div id="map" className="map" />
      <script src="https://api-maps.yandex.ru/v3/?apikey=9c22583d-03a4-41dc-858e-0da1f898cce7&lang=ru_RU" />
    </Layout>
  );
}

module.exports = Main;

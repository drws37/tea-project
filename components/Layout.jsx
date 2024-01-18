const React = require("react");
const NavBar = require("./NavBar");

module.exports = function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link
          href="/styles/bootstrap.css"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/css/bootstrap.css" />
        <link rel="stylesheet" href="/css/styles.css" />
        <script defer src="/js/map.js" />
        <script src="https://api-maps.yandex.ru/v3/?apikey=9c22583d-03a4-41dc-858e-0da1f898cce7&lang=ru_RU" />
      </head>
      <body>{children}</body>
    </html>
  );
};

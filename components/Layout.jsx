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
      </head>
      <body>{children}</body>
    </html>
  );
};

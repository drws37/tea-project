const React = require('react');
const NavBar = require('./NavBar');

module.exports = function Layout({ title, children, user }) {
  console.log({ title });
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link
          href="/styles/bootstrap.css"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/styles/bootstrap.css" />
        <link rel="stylesheet" href="/styles/styles.css" />
        <script defer src="/scripts/map.js" />
        <script defer src="/scripts/auth.js" />
        <script defer src="/scripts/add.js" />
        <script defer src="/scripts/delete.js" />
        <script defer src="/scripts/addComment.js" />
        <script src="https://api-maps.yandex.ru/v3/?apikey=9c22583d-03a4-41dc-858e-0da1f898cce7&lang=ru_RU" />
      </head>
      <body>
        <NavBar user={user} />
        {children}
      </body>
    </html>
  );
};

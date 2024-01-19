const React = require('react');
const Layout = require('./Layout');

function LoginPage({ title }) {
  return (
    <Layout title={title}>
      <div className="logapage">
        <form id="log-page" className="loga">
          <div className="mb-3">
            <h1>Авторизация</h1>
            <label htmlFor="exampleInputEmail1" className="form-label">
              Login
            </label>
            <input name="name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check" />
          <button type="submit" className="btn btn-primary btn-dark">Submit</button>
        </form>
      </div>

    </Layout>

  );
}

module.exports = LoginPage;

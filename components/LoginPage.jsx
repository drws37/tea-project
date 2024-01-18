const React = require('react');
const Layout = require('./Layout');

function LoginPage({ title }) {
  return (
    <Layout title={title}>
      <form id="log-page">
        <div className="mb-3">
          <h1>Авторизация</h1>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Login
            <input name="name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
            <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
          </label>
        </div>
        <div className="mb-3 form-check" />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </Layout>

  );
}

module.exports = LoginPage;

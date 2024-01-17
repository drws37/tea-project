const React = require('react');
const Layout = require('./Layout');

function RegPage({ title }) {
  return (
    <Layout>
      <form id="reg-page">
        <h1>Регистрация</h1>
        <div className="mb-3">
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
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Repeat password
            <input name="rpassword" type="password" className="form-control" id="exampleInputPassword1" />
          </label>
        </div>
        <div className="mb-3 form-check" />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </Layout>

  );
}

module.exports = RegPage;

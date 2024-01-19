/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/jsx-closing-tag-location */
const React = require('react');
const Layout = require('./Layout');

function RegPage({ title }) {
  return (
    <Layout title={title}>
      <div className="logapage">
        <form id="reg-page" className="loga">
          <h1 className="mid">Регистрация</h1>
          <h1
            style={{ color: 'rgba(255,0,0,1)', textTransform: 'uppercase' }}
            className="sign-up__error"
          ></h1>
          <div className="mb-3">
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
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Repeat password
            </label>
            <input name="rpassword" type="password" className="form-control" id="exampleInputPassword2" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Image
              <input name="img" type="file" className="form-control" id="exampleInputPassword3" />
            </label>
          </div>
          <div className="mb-3 form-check" />
          <button type="submit" className="btn btn-primary btn-dark">Submit</button>
        </form>
      </div>

    </Layout>

  );
}

module.exports = RegPage;

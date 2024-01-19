const React = require('react');

function NavBar({ user }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        
        <img src="/img/teapot.png" alt="" />
        <h1 className="navbar-brand" href="#">
          ChAi
        </h1>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button> */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link ml-auto" aria-current="page" href="/">
                Home
              </a>
            </li>
            {user ? (
              <>
                <li className="nav-item">
                  <a className="nav-link ml-auto" href="/profile">
                    {user.name}
                  </a>
                </li>
                <a className="nav-link" href="/api/auth/logout">
                  Logout
                </a>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link active" href="/auth/login">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/auth/reg">
                    Registration
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

module.exports = NavBar;

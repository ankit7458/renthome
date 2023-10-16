const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top bg-dark navbar-c">
        <div className="container-fluid ">
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="row">
                  <div className="col-sm">
                    <a className="navbar-brand text-white" href="#">
                      RentHome.com
                    </a>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                  </div>
                  <div className="col-sm">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a
                          className="nav-link active text-white"
                          aria-current="page"
                          href="#"
                        >
                          Home
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                {/* <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <form className="d-flex search-bar" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div> */}
              </div>
              <div className="col-sm"></div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

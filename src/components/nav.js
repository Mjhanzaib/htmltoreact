import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <div>
      <div class="site-mobile-menu site-navbar-target">
        <div class="site-mobile-menu-header">
          <div class="site-mobile-menu-close mt-3">
            <span class="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div class="site-mobile-menu-body"></div>
      </div>
      <div className="header-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 d-flex">
              <Link to="/" exact className="site-logo">
                Meranda in React
            </Link>
              <Link
                to=""
                className="ml-auto d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"
              >
                <span className="icon-menu h3"></span>
              </Link>
            </div>
            <div className="col-12 col-lg-6 ml-auto d-flex">
              <div className="ml-md-auto top-social d-none d-lg-inline-block">
                <Link to="/" className="d-inline-block p-3">
                  <span className="icon-facebook"></span>
                </Link>
                <Link to="/" className="d-inline-block p-3">
                  <span className="icon-twitter"></span>
                </Link>
                <Link to="/" className="d-inline-block p-3">
                  <span className="icon-instagram"></span>
                </Link>
              </div>
              <form action="#" className="search-form d-inline-block">
                <div className="d-flex">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Search..."
                  ></input>
                  <button type="submit" className="btn btn-secondary">
                    <span className="icon-search"></span>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-6 d-block d-lg-none text-right"></div>
          </div>
        </div>
        <div
          className="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block"
          role="banner"
        >
          <div className="container">
            <div className="d-flex align-items-center">
              <div className="mr-auto">
                <nav
                  className="site-navigation position-relative text-right"
                  role="navigation"
                >
                  <ul className="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block">
                    <Link to="/">
                      <li className="nav-link text-left">Home</li>
                    </Link>

                    <Link to="/about-us">
                      <li className="nav-link text-left">About</li>
                    </Link>
                    <Link to="/category">
                      <li className="nav-link text-left">categories</li>
                    </Link>
                    <Link to="/category/politics">
                      <li className="nav-link text-left"> Politics </li>
                    </Link>

                    <Link to="/category/business">
                      <li className="nav-link text-left"> Business </li>
                    </Link>

                    <Link to="/category/health">
                      <li className="nav-link text-left"> Health </li>
                    </Link>

                    <Link to="/category/design">
                      <li className="nav-link text-left"> Design </li>
                    </Link>

                    <Link to="/category/sport">
                      <li className="nav-link text-left"> Sport </li>
                    </Link>
                    <Link to="/contact-us">
                      <li className="nav-link text-left">contact</li>
                    </Link>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Nav;

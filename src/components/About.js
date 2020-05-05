import React from "react";
import Postlistitem from './PostListItem';
function About() {
  return (

    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-left">
            <div className="section-title mb-5">
              <h2>About Us</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <p>
              <img
                src="images/big_img_1.jpg"
                alt="Image"
                className="img-fluid"
              />
            </p>
          </div>
          <div className="col-lg-6 pl-md-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
              qui obcaecati eaque odio, alias nulla quae, aliquid, rerum
              consequuntur, quaerat blanditiis cupiditate eos doloribus
              dolor debitis! Ex eius deleniti, soluta!
                </p>
            <p>
              Facilis sit molestiae deserunt quo corporis culpa dolorum
              animi architecto illum sapiente. Asperiores, placeat animi
              distinctio provident adipisci.
                </p>
            <ul className="ul-check list-unstyled success mt-5">
              <li>Lorem ipsum dolor sit.</li>
              <li>Cupiditate dolores rerum, consequatur!</li>
              <li>Quia dolor molestias voluptatem?</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="copyright">
                <p>
                  Copyright &copy;
                    <script>
                    document.write(new Date().getFullYear());
                    </script>{" "}
                    All rights reserved | This template is made with{" "}
                  <i
                    className="icon-heart text-danger"
                    aria-hidden="true"
                  ></i>{" "}
                    by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                    </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*<div id="loader" className="show fullscreen">
          <svg className="circular" width="48px" height="48px">
            <circle
              className="path-bg"
              cx="24"
              cy="24"
              r="22"
              fill="none"
              stroke-width="4"
              stroke="#eeeeee"
            />
            <circle
              className="path"
              cx="24"
              cy="24"
              r="22"
              fill="none"
              stroke-width="4"
              stroke-miterlimit="10"
              stroke="#ff5e15"
            />
          </svg>
        </div>*/}
      </div>
    </div>
  );

}
export default About;


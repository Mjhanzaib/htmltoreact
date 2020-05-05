import React from "react";
import PostListItem from "./PostListItem";
import Slider from "./slider";
import Trending from "./trending";
import PostEntry from "./postentry";
import Recentnews from "./recentnews";
function Home() {
  return (
    <div>
      <div className="App">
        <div className="site-wrap">
          <div className="site-mobile-menu site-navbar-target">
            <div className="site-mobile-menu-header">
              <div className="site-mobile-menu-close mt-3">
                <span className="icon-close2 js-menu-toggle"></span>
              </div>
            </div>
            <div className="site-mobile-menu-body"></div>
          </div>

          <div className="site-section py-0">
            <div className="owl-carousel hero-slide owl-style">
              <Slider title=' i am here to teach you the react language' />
            </div>
          </div>

          <div className="site-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-12">
                      <div className="section-title">
                        <h2>Editor's Pick</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="post-entry-1">
                        <a href="post-single.html">
                          <img
                            src="images/img_h_1.jpg"
                            alt="Image"
                            className="img-fluid"
                          ></img>
                        </a>
                        <h2>
                          <a href="blog-single.html">
                            News Needs to Meet Its Audiences Where They Are
                          </a>
                        </h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Eligendi temporibus praesentium neque,
                          voluptatum quam quibusdam.
                        </p>
                        <div className="post-meta">
                          <span className="d-block">
                            <a href="#">Dave Rogers</a> in <a href="#">News</a>
                          </span>
                          <span className="date-read">
                            Jun 14 <span className="mx-1">&bullet;</span> 3 min
                            read <span className="icon-star2"></span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <PostListItem
                        classes="bg-light"
                        image="images/img_v_1.jpg"
                        title="News Needs to Meet Its Audiences Where They Are"
                        author="Dave Rogers"
                        date="Jun 14"
                        readTime="3 min"
                        category="News"
                      />
                      <PostListItem
                        classes=""
                        image="images/img_v_2.jpg"
                        title="News Needs to Meet Its Audiences Where They Are"
                        author="Dave Rogers"
                        date="Jun 14"
                        readTime="3 min"
                        category="News"
                      />
                      <PostListItem
                        classes=""
                        image="images/img_v_3.jpg"
                        title="News Needs to Meet Its Audiences Where They Are"
                        author="Dave Rogers"
                        date="Jun 14"
                        readTime="3 min"
                        category="News"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="section-title">
                    <h2>Trending</h2>
                  </div>

                  <Trending
                    number="01"
                    title="News Needs to Meet Its Audiences Where They Are"
                    author="jhanzaib"
                    date="april 23"
                    readTime="3 min read "
                    category="News"
                  />
                  <Trending
                    number="02"
                    title="News Needs to Meet Its Audiences Where They Are"
                    author="jhanzaib"
                    date="april 23"
                    readTime="3 min read "
                    category="News"
                  />
                  <Trending
                    number="03"
                    title="News Needs to Meet Its Audiences Where They Are"
                    author="jhanzaib"
                    date="april 23"
                    readTime="3 min read "
                    category="News"
                  />
                  <Trending
                    number="04"
                    title="News Needs to Meet Its Audiences Where They Are"
                    author="jhanzaib"
                    date="april 23"
                    readTime="3 min read "
                    category="News"
                  />
                  <p>
                    <a href="#" className="more">
                      See All Trends{" "}
                      <span className="icon-keyboard_arrow_right"></span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Slider
            image="images/big_img_1.jpg"
            title="News Needs to Meet Its Audiences Where They Are"
            author="jhanzaib"
            date="2020"
            readTime="2 min"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis. Enim praesentium magni delectus cum, tempore deserunt aliquid quaerat culpa nemo veritatis, iste adipisci excepturi consectetur doloribus aliquam accusantium beatae?"
            catagory="react language"
          />

          <div className="site-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="section-title">
                    <h2>Politics</h2>
                  </div>
                  <PostEntry
                    title="News Needs to Meet Its Audiences Where They Are"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam."
                    author="jhanzaib"
                    date="april 23"
                    readTime="5 min read"
                    catagory="react language"
                    image="images/img_v_1.jpg"
                  />
                  <PostEntry
                    title="News Needs to Meet Its Audiences Where They Are"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam."
                    author="jhanzaib"
                    date="april 23"
                    readTime="5 min read"
                    catagory="react language"
                    image="images/img_v_2.jpg"
                  />
                  <PostEntry
                    title="News Needs to Meet Its Audiences Where They Are"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam."
                    author="jhanzaib"
                    date="april 23"
                    readTime="5 min read"
                    catagory="react language"
                    image="images/img_v_3.jpg"
                  />
                </div>
                <div className="col-lg-6">
                  <div className="section-title">
                    <h2>Business</h2>
                  </div>
                  <PostEntry
                    title="News Needs to Meet Its Audiences Where They Are"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam."
                    author="jhanzaib"
                    date="april 23"
                    readTime="5 min read"
                    catagory="react language"
                    image="images/img_v_3.jpg"
                  />
                  <PostEntry
                    title="News Needs to Meet Its Audiences Where They Are"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam."
                    author="jhanzaib"
                    date="april 23"
                    readTime="5 min read"
                    catagory="react language"
                    image="images/img_v_1.jpg"
                  />
                  <PostEntry
                    title="News Needs to Meet Its Audiences Where They Are"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam."
                    author="jhanzaib"
                    date="april 23"
                    readTime="5 min read"
                    catagory="react language"
                    image="images/img_v_2.jpg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="site-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-9">
                  <div className="section-title">
                    <h2>Recent News</h2>
                  </div>

                  <Recentnews
                    title="News Needs to Meet Its Audiences Where They Are"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam."
                    author="jhanzaib"
                    date="april 23"
                    readTime="5 min read"
                    category="react language"
                    image="images/img_v_3.jpg"
                  />
                  <Recentnews
                    title="News Needs to Meet Its Audiences Where They Are"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam."
                    author="jhanzaib"
                    date="april 23"
                    readTime="5 min read"
                    category="react language"
                    image="images/img_v_1.jpg"
                  />
                  <Recentnews
                    title="News Needs to Meet Its Audiences Where They Are"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam."
                    author="jhanzaib"
                    date="april 23"
                    readTime="5 min read"
                    category="react language"
                    image="images/img_v_2.jpg"
                  />
                </div>
                <div className="col-lg-3">
                  <div className="section-title">
                    <h2>Popular Posts</h2>
                  </div>

                  <Trending
                    number="01"
                    title="News Needs to Meet Its Audiences Where They Are"
                    author="jhanzaib"
                    date="april 23"
                    readTime="3 min read "
                    category="News"
                  />
                  <Trending
                    number="02"
                    title="News Needs to Meet Its Audiences Where They Are"
                    author="jhanzaib"
                    date="april 23"
                    readTime="3 min read "
                    category="News"
                  />
                  <Trending
                    number="03"
                    title="News Needs to Meet Its Audiences Where They Are"
                    author="jhanzaib"
                    date="april 23"
                    readTime="3 min read "
                    category="News"
                  />
                  <Trending
                    number="04"
                    title="News Needs to Meet Its Audiences Where They Are"
                    author="jhanzaib"
                    date="april 23"
                    readTime="3 min read "
                    category="News"
                  />

                  <p>
                    <a href="#" className="more">
                      See All Popular{" "}
                      <span className="icon-keyboard_arrow_right"></span>
                    </a>
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <ul className="custom-pagination list-unstyled">
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li className="active">2</li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="site-section subscribe bg-light">
            <div className="container">
              <form action="#" className="row align-items-center">
                <div className="col-md-5 mr-auto">
                  <h2>Newsletter Subcribe</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Perferendis aspernatur ut at quae omnis pariatur obcaecati
                    possimus nisi ea iste!
                  </p>
                </div>
                <div className="col-md-6 ml-auto">
                  <div className="d-flex">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    ></input>
                    <button type="submit" className="btn btn-secondary">
                      <span className="icon-paper-plane"></span>
                    </button>
                  </div>
                </div>
              </form>
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

  );
}
export default Home;

import React from "react";

function Contact() {
  return (
    <div data-spy="scroll" data-target=".site-navbar-target" data-offset="300">

      <div className="site-wrap">
        <div className="site-section bg-light">
          <div className="container">
            <div className="row">

              <div className="col-lg-12">
                <div className="section-title mb-5">
                  <h2>Contact Us</h2>
                </div>
                <form method="post">

                  <div className="row">
                    <div className="col-md-6 form-group">
                      <label for="fname">First Name</label>
                      <input type="text" id="fname" className="form-control form-control-lg" />
                    </div>
                    <div className="col-md-6 form-group">
                      <label for="lname">Last Name</label>
                      <input type="text" id="lname" className="form-control form-control-lg" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <label for="eaddress">Email Address</label>
                      <input type="text" id="eaddress" className="form-control form-control-lg" />
                    </div>
                    <div className="col-md-6 form-group">
                      <label for="tel">Tel. Number</label>
                      <input type="text" id="tel" className="form-control form-control-lg" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <label for="message">Message</label>
                      <textarea name="" id="message" cols="30" rows="10" className="form-control"></textarea>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
                    </div>
                  </div>

                </form>
              </div>

            </div>


          </div>
        </div>



        <div className="footer">
          <div className="container">


            <div className="row">
              <div className="col-12">
                <div className="copyright">
                  <p>

                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer" >Colorlib</a>

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>





        {/*<div id="loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" /><circle className="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#ff5e15" /></svg></div>*/}
      </div>


    </div>
  );
}
export default Contact;

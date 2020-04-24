import React from 'react';

const sliderPost = (props)=>{
const {title, description, author, catagory, date, readTime , image ,classes} = props;

    return(
    
      <div className="site-section">
                <div className="container">
        <div className='half-post-entry d-block d-lg-flex bg-light'>

                  {/*<div className="img-bg" style={{ backgroundImage: "url('images/big_img_1.jpg')" }}></div>*/}
                  
                    {/*<div className="img-bg" style={{ backgroundImage: `url('${image}')` }}></div>*/}
                    <div className="img-bg" style={{ backgroundImage: `url('${image}')` }}></div>

                  <div className="contents">
                    <span className="caption">Latest Posts</span>
                    <h2><a href="blog-single.html">{title}</a></h2>
                    <p className="mb-3">{description}</p>

                    <div className="post-meta">
                      <span className="d-block"><a href="#">{author}</a> in <a href="#">{catagory}</a></span>
                      <span className="date-read">{date}<span className="mx-1">&bullet;</span>{readTime} <span className="icon-star2"></span></span>
                    </div>

                  </div>
                </div>
                
                </div>
                </div>
                
            
             

    );
}
export default sliderPost;
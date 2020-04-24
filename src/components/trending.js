import React from 'react';
const Trending=(props)=>{
    const{title , author , category, date, readTime , number}=props;

        return(
            <div className="trend-entry d-flex">
                  <div className="number align-self-start">{number}</div>
                  <div className="trend-contents">
                    <h2><a href="blog-single.html">{title}</a></h2>
                    <div className="post-meta">
                      <span className="d-block"><a href="#">{author}</a> in <a href="#">{category}</a></span>
                      <span className="date-read">{date} <span className="mx-1">&bullet;</span> {readTime}<span className="icon-star2"></span></span>
                    </div>
                  </div>
                </div>
        );

}
export default Trending;

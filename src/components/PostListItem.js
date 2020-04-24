import React from 'react';

const PostListItem= (props) => {
    const { title, image, author, category, date, readTime, classes } = props;
    return (
        <div className={`post-entry-2 d-flex ${classes}`}>
            <div className="thumbnail" style={{ backgroundImage: `url('${image}')` }}></div>
            <div className="contents">
                <h2><a href="blog-single.html">{title}</a></h2>
                <div className="post-meta">
                    <span className="d-block"><a href="#">{author}</a> in <a href="#">{category}</a></span>
                    <span className="date-read">{date} <span className="mx-1">&bullet;</span> {readTime} read <span className="icon-star2"></span></span>
                </div>
            </div>
            </div>

    );
}

export default PostListItem;
import React from 'react';

import './style/BlogPost.css';

const BlogPost = ({ title, content, redirectLink }) => {
  return (
    
    <section className="blog-post" id="blog">
        <h2>Blog</h2>
        <article className="blog-post">
        <h3>{title}</h3>
        <p>{content}</p>
        <a href={redirectLink} target="_blank" rel="noopener noreferrer">
            Read more
        </a>
        </article>
    </section>
  );
};

export default BlogPost;
import {Link,Outlet} from "react-router-dom";
import React from 'react';
import { posts } from './data/post';
import classes from './Home.module.css';
import parse from 'html-react-parser';


export default function BlogList() {
  return (
    <ul className={classes.blogList}>
      {posts.map((post) => (
        <li key={post.id} className={classes.blogItem}>
          <Link to={`/blog/${post.id}`} className={classes.blogLink}>
            <div className={classes.blogMeta}>
              <p className={classes.blogDate}>{new Date(post.createdAt).toLocaleDateString()}</p>
              <ul className={classes.blogCategories}>
                {post.categories.map((cat) => (
                  <li className={classes.blogCategory} key={cat}>{cat}</li>
                ))}
              </ul>
            </div>
            <p className={classes.blogTitle}>{post.title}</p>
            <p className={classes.blogExcerpt}>{parse(post.content)}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}
import {Link} from "react-router-dom";
import React from 'react';
import classes from './Home.module.css';
import parse from 'html-react-parser';
import { useEffect, useState } from "react";


export default function BlogList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
    const fetcher = async () => {
      const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts")
      const data = await res.json()
      setPosts(data.posts)
    }

    fetcher()
  }, [])

  return (
    <ul className={classes.blogList}>
      {posts.map((post) => (
        <li key={post.id} className={classes.blogItem}>
          <Link to={`/posts/${post.id}`} className={classes.blogLink}>
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
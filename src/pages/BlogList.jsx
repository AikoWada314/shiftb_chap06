import {Link,Outlet} from "react-router-dom";
import React from 'react';
import { posts } from './data/post';
import '../css/blog.css';
import parse from 'html-react-parser';


export default function BlogList() {
  return (
    <ul className="blog__list">
      {posts.map((post) => (
        <li key={post.id} className="blog__item">
          <Link to={`/blog/${post.id}`} className="blog__link">
            <div className="blog__meta">
              <p className="blog__date">{new Date(post.createdAt).toLocaleDateString()}</p>
              <ul className="blog__categories">
                {post.categories.map((cat) => (
                  <li className="blog__category" key={cat}>{cat}</li>
                ))}
              </ul>
            </div>
            <p className="blog__title">{post.title}</p>
            <p className="blog__excerpt">{parse(post.content)}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}
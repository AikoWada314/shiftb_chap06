import { useParams } from "react-router-dom";
import React from 'react';
import classes from './Detail.module.css';
import parse from 'html-react-parser';
import { useEffect, useState } from "react";

export default function Detail() {
  const { id } = useParams();

  const [posts, setPosts] = useState([]);  
      useEffect(() => {
      const fetcher = async () => {
        const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts")
        const data = await res.json()
        setPosts(data.posts)
      }
  
      fetcher()
    }, [])

  const post = posts.find((p) => String(p.id) === id);
  if (!post) return <div>記事が見つかりません</div>;
  return (
    <div className={classes.detailBody}>
      <div className={classes.detailThumbnail}>
        <img src={post.thumbnailUrl} alt={post.title} />
      </div>
      <div className={classes.detailContent}>
        <div className={classes.detailMeta}>
          <p className={classes.detailDate}>{new Date(post.createdAt).toLocaleDateString()}</p>
          <ul className={classes.detailCategories}>
            {post.categories.map((cat) => (
              <li className={classes.detailCategory} key={cat}>{cat}</li>
            ))}
          </ul>
        </div>
        <h1 className={classes.detailTitle}>{post.title}</h1>
          <div className={classes.detailExcerpt}>{parse(post.content)}</div>
      </div>
    </div>
  );
}
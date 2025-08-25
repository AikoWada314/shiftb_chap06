import { useParams } from "react-router-dom";
import React from 'react';
import { posts } from '../../Home/data/post';
import classes from './Detail.module.css';
import parse from 'html-react-parser';

export default function Detail() {
  const { id } = useParams();
  console.log(id);
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
          <p className={classes.detailExcerpt}>{parse(post.content)}</p>
      </div>
    </div>
  );
}
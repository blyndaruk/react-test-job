import React from 'react';

import styles from './Post.module.scss';

const Post = ({ post }) => {
  const { id, title, body } = post

  return (
    <div className={styles['post']}>
      {title && <h2 className={styles['post__title']}>{id}: {title} <span style={{ fontSize: '70%' }}>(id:{id})</span></h2>}
      {body && (
        <div className={styles['post__description']}>
          <p>{body}</p>
        </div>
      )}
    </div>
  );
};

export default Post;

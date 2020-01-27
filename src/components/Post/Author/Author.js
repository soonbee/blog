// @flow strict
import React from 'react';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles['author']}>
      <span>
        <strong>{author.name}</strong>
      </span>
      <p className={styles['author__bio']}>
        {author.bio}
      </p>
    </div>
  );
};

export default Author;

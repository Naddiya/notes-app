import React from 'react';
import Link from 'next/link';
import styles from '../src/styles.module.css';

export default () => (
  <div>
    <h1 className={styles.body}>Index page</h1>
    <Link href="/notes">
      <a>Notes</a>
    </Link>
  </div>
);
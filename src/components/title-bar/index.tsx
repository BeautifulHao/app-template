

import React, { FC } from 'react';
import styles from './index.module.less';

const TitleBar: FC<any> = ({ title }) => (
  <div className={styles.title}>
    <div className={styles.split} />
    <h1 className={styles.text}>{title}</h1>
    <div className={styles.split} />
  </div>
);

export default TitleBar;

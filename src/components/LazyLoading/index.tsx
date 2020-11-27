import React from 'react';
import science from '../../assets/img/science.svg';
import styles from './index.module.less';

const LazyLoading: React.FC<any> = () => (
  <div className={styles.loading}>
    <div className={styles.icon}>
      <img src={science} alt="loading" />
    </div>
  </div>
);

export default LazyLoading;

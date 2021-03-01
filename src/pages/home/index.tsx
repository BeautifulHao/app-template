import React from 'react';
import styles from './index.module.less';
import SvgIcon from '../../components/icon-svg/index';
import Slide from './slide';
import TitleBar from '../../components/title-bar/index';
import Entry from './entry/index';

const Home: React.FC<any> = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles['header-left']}>
          <SvgIcon name="#location" className={styles.icon} />
          <p className={styles.desc}>杭州</p>
        </div>
        <div className={styles['header-center']}>
          <div className={styles['header-search']}>
            <div className={styles['search-box']}>
              <SvgIcon name="#search" className={styles.icon} />
              <p className={styles.desc}>搜索一切你想搜索的东西</p>
            </div>
          </div>
        </div>
        <div className={styles['header-right']}>
          <SvgIcon name="#round_add" className={styles.icon} />
        </div>
      </div>

      <div className={styles.content}>
        <Slide />
        <Entry />
        <TitleBar title="详细信息" />
      </div>
    </div>
  );
};

export default Home;

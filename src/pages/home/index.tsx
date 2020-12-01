import React from 'react';
import styles from './index.module.less';
import axios from 'axios'
import SvgIcon from '../../components/icon-svg/index'

const Home: React.FC<any> = () => {

  const itemClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    axios({
      method: "get",
      url: "/api/getUserInfo",
      params: { id: '123' }
    }).then(data => {
      console.log(data)
    })

    axios({
      method: "post",
      url: "/api/updateUserInfo",
      data: { id: '123' }
    }).then(data => {
      console.log(data)
    })
  }

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles["header-left"]}>
          <SvgIcon name={'#location'} className={styles.icon} ></SvgIcon>
          <p className={styles.desc}>杭州</p>
        </div>
        <div className={styles["header-center"]}>
          <div className={styles["header-search"]}>
            <div className={styles["search-box"]}>
              <SvgIcon name={'#search'} className={styles.icon} ></SvgIcon>
              <p className={styles.desc}>搜索一切你想搜索的东西</p>
            </div>
          </div>
        </div>
        <div className={styles["header-right"]}>
          <SvgIcon name={'#round_add'}  className={styles.icon} ></SvgIcon>
        </div>
      </div>
      <div className={styles.content}>
        <span onClick={itemClick}><SvgIcon name={'#search'} className={styles["search-icon"]}></SvgIcon>Hello World!</span>
      </div>
    </div>
  );
};

export default Home;

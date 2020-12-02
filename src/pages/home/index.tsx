import React, { useRef, useState, useEffect } from 'react';
import styles from './index.module.less';
import axios from 'axios'
import SvgIcon from '../../components/icon-svg/index'
import cls from 'classnames'
import BScroll from "better-scroll"
import img1 from '../../assets/img/1.jpg'
import img2 from '../../assets/img/2.jpg'
import img3 from '../../assets/img/3.jpg'
import img4 from '../../assets/img/4.jpg'

const Home: React.FC<any> = () => {

  const scrollContaninerRef = useRef<any>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [bscroll, setBScroll] = useState<any>();
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const itemCls = (name: number) => cls({
    [styles.dot]: true,
    [styles.active]: currentPageIndex === name,
  })

  useEffect(() => {
    const scroll = new BScroll(scrollContaninerRef.current, {
      scrollX: true,
      scrollY: false,
      slide: true,
      useTransition: true,
      momentum: false,
      bounce: false,
      stopPropagation: true,
      probeType: 3
    });

    scroll.on('slideWillChange', (page: any) => {
      setCurrentPageIndex(page.pageX)
    })

    setBScroll(scroll);
    return () => {
      setBScroll(null);
    }
  }, []);

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
          <SvgIcon name={'#round_add'} className={styles.icon} ></SvgIcon>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles["slide-banner"]}>
          <div className={styles["banner-wrapper"]}>
            <div className={styles["slide-banner-wrapper"]} ref={scrollContaninerRef}>
              <div className={styles["slide-banner-content"]}>
                <div className={cls(styles["slide-page"], styles.page1)}>
                  <img src={img1} alt="img1" className={styles.img} />
                </div>
                <div className={cls(styles["slide-page"], styles.page2)}>
                  <img src={img2} alt="img2"  className={styles.img}/></div>
                <div className={cls(styles["slide-page"], styles.page3)}>
                  <img src={img3} alt="img3"  className={styles.img}/></div>
                <div className={cls(styles["slide-page"], styles.page4)}>
                  <img src={img4} alt="img4"  className={styles.img}/></div>
              </div>
            </div>
            <div className={styles["dots-wrapper"]}>
              <span className={itemCls(0)}></span>
              <span className={itemCls(1)}></span>
              <span className={itemCls(2)}></span>
              <span className={itemCls(3)}></span>
            </div>
          </div>
        </div>
        <span onClick={itemClick}><SvgIcon name={'#search'} className={styles["search-icon"]}></SvgIcon>Hello World!</span>
      </div>
    </div>
  );
};

export default Home;

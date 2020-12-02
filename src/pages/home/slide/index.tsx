import React, { useRef, useState, useEffect, FC } from 'react'
import cls from 'classnames'
import BScroll from "better-scroll"
import styles from './index.module.less'
import img1 from '../../../assets/img/1.jpg'
import img2 from '../../../assets/img/2.jpg'
import img3 from '../../../assets/img/3.jpg'
import img4 from '../../../assets/img/4.jpg'

const Slide: FC<any> = () => {

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


    return (
        <div className={styles["slide-banner"]}>
            <div className={styles["banner-wrapper"]}>
                <div className={styles["slide-banner-wrapper"]} ref={scrollContaninerRef}>
                    <div className={styles["slide-banner-content"]}>
                        <div className={cls(styles["slide-page"], styles.page1)}>
                            <img src={img1} alt="img1" className={styles.img} />
                        </div>
                        <div className={cls(styles["slide-page"], styles.page2)}>
                            <img src={img2} alt="img2" className={styles.img} /></div>
                        <div className={cls(styles["slide-page"], styles.page3)}>
                            <img src={img3} alt="img3" className={styles.img} /></div>
                        <div className={cls(styles["slide-page"], styles.page4)}>
                            <img src={img4} alt="img4" className={styles.img} /></div>
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
    )
}

export default Slide;
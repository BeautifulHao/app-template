import React, { FC } from 'react';
import styles from './index.module.less';
import entry01 from '../../../assets/img/entry01.webp';
import entry02 from '../../../assets/img/entry02.webp';
import entry03 from '../../../assets/img/entry03.webp';
import entry04 from '../../../assets/img/entry04.webp';
import entry05 from '../../../assets/img/entry05.webp';
import entry06 from '../../../assets/img/entry06.webp';
import entry07 from '../../../assets/img/entry07.webp';
import entry08 from '../../../assets/img/entry08.webp';
import entry09 from '../../../assets/img/entry09.webp';

const Entry: FC<any> = () => {
  return (
    <div className={styles.entry}>
      <div className={styles.item}>
        <div className={styles.img}>
          <img src={entry01} alt="" />
        </div>
        <p className={styles.text}>面食</p>
      </div>
      <div className={styles.item}>
        <div className={styles.img}>
          <img src={entry02} alt="" />
        </div>
        <p className={styles.text}>晚餐</p>
      </div>
      <div className={styles.item}>
        <div className={styles.img}>
          <img src={entry03} alt="" />
        </div>
        <p className={styles.text}>跑腿</p>
      </div>
      <div className={styles.item}>
        <div className={styles.img}>
          <img src={entry04} alt="" />
        </div>
        <p className={styles.text}>代购</p>
      </div>
      <div className={styles.item}>
        <div className={styles.img}>
          <img src={entry05} alt="" />
        </div>
        <p className={styles.text}>甜品</p>
      </div>
      <div className={styles.item}>
        <div className={styles.img}>
          <img src={entry06} alt="" />
        </div>
        <p className={styles.text}>小吃</p>
      </div>
      <div className={styles.item}>
        <div className={styles.img}>
          <img src={entry07} alt="" />
        </div>
        <p className={styles.text}>面馆</p>
      </div>
      <div className={styles.item}>
        <div className={styles.img}>
          <img src={entry08} alt="" />
        </div>
        <p className={styles.text}>包子</p>
      </div>
      <div className={styles.item}>
        <div className={styles.img}>
          <img src={entry09} alt="" />
        </div>
        <p className={styles.text}>粥店</p>
      </div>
      <div className={styles.item}>
        <div className={styles.img}>
          <img src={entry04} alt="" />
        </div>
        <p className={styles.text}>更多</p>
      </div>
    </div>
  );
};

export default Entry;

import React from "react";
import { renderRoutes } from "react-router-config";
import styles from './home.module.less'
import cls from 'classnames';
import SvgIcon from '../components/icon-svg/index'

function HomeLayout(props: any) {
  const { route, location: { pathname } } = props;
  const itemCls = (name: string) => cls({
    [styles.item]: true,
    [styles.active]: pathname === name,
  })
  const handleClick = (path: string) => {
    if (path === pathname) return
    props.history.push(path)
  }

  return (
    <div className={styles.root}>
      {renderRoutes(route.routes)}
      <div className={styles["bottom-nav"]}>
        <div className={itemCls('/home')} onClick={() => handleClick('/home')}>
          <SvgIcon className={cls(styles.icon, styles.scale)} name="#elem" />
          <h1 className={styles.text}>主页</h1>
        </div>

        <div className={itemCls('/compass')} onClick={() => handleClick('/compass')}>
          <SvgIcon className={styles.icon} name="#compass" />
          <h1 className={styles.text}>发现</h1>
        </div>
        <div className={itemCls('/about')} onClick={() => handleClick('/about')}>
          <SvgIcon className={styles.icon} name="#form" />
          <h1 className={styles.text}>关于</h1>
        </div>
        <div className={itemCls('/profile')} onClick={() => handleClick('/profile')}>
          <SvgIcon className={styles.icon} name="#people" />
          <h1 className={styles.text}>我的</h1>
        </div>
      </div>
    </div>
  );
}

export default React.memo(HomeLayout);

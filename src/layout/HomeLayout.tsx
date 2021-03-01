import React from 'react';
import { renderRoutes } from 'react-router-config';
import cls from 'classnames';
import styles from './home.module.less';
import SvgIcon from '../components/icon-svg/index';

function HomeLayout(props: any) {
  const {
    route,
    location: { pathname },
  } = props;
  const itemCls = (name: string) => {
    return cls({ [styles.item]: true, [styles.active]: pathname === name });
  };
  const handleClick = (path: string) => {
    if (path === pathname) return;
    props.history.push(path);
  };

  return (
    <div className={styles.root}>
      {renderRoutes(route.routes)}
      <div className={styles['nav-bar']}>
        <div
          className={itemCls('/page/home')}
          onClick={() => handleClick('/page/home')}
        >
          <SvgIcon className={cls(styles.icon, styles.scale)} name="#elem" />
          <h1 className={styles.text}>主页</h1>
        </div>

        <div
          className={itemCls('/page/compass')}
          onClick={() => handleClick('/page/compass')}
        >
          <SvgIcon className={styles.icon} name="#compass" />
          <h1 className={styles.text}>发现</h1>
        </div>
        <div
          className={itemCls('/page/about')}
          onClick={() => handleClick('/page/about')}
        >
          <SvgIcon className={styles.icon} name="#form" />
          <h1 className={styles.text}>关于</h1>
        </div>
        <div
          className={itemCls('/page/profile')}
          onClick={() => handleClick('/page/profile')}
        >
          <SvgIcon className={styles.icon} name="#people" />
          <h1 className={styles.text}>我的</h1>
        </div>
      </div>
    </div>
  );
}

export default React.memo(HomeLayout);

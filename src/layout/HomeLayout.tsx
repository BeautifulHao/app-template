import React from "react";
import { renderRoutes } from "react-router-config";
import { NavLink } from "react-router-dom";
import styles from './home.module.less'

function HomeLayout(props: any) {
  const { route } = props;

  return (
    <div className={styles.root}>
      {renderRoutes(route.routes)}
      <div className={styles["bottom-nav"]}>
        <NavLink to="/home" activeClassName={styles["selected"]}>
          <div className={styles["nav-item"]}>
            <span>主页</span>
          </div>
        </NavLink>
        <NavLink to="/about" activeClassName={styles["selected"]}>
          <div className={styles["nav-item"]}>
            <span>关于</span>
          </div>
        </NavLink>
        <NavLink to="/compass" activeClassName={styles["selected"]}>
          <div className={styles["nav-item"]}>
            <span>发现</span>
          </div>
        </NavLink>
        <NavLink to="/profile" activeClassName={styles["selected"]}>
          <div className={styles["nav-item"]}>
            <span>我的</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default React.memo(HomeLayout);

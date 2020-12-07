import React, { FC } from 'react';
import cls from 'classnames'
import styles from './index.module.less';
import SvgIcon from '../icon-svg/index';

export interface NavBarProps {
    iconLeft?: string,
    iconRight?: string,
    leftClick?: () => {},
    rightClick?: () => {},
    title: string,
    className?: string,
}

const NavBar: FC<NavBarProps> = (props: NavBarProps) => {

    const {
        iconLeft,
        iconRight,
        leftClick,
        rightClick,
        title,
        className,
      } = props

    return (
        <div className={cls(styles.nav, className)}>
        {
          iconLeft ? (
            <div className={styles.icon} onClick={leftClick}>
              <SvgIcon name={iconLeft} />
            </div>
          ) : null
        }
        <div className={styles.title}>{title}</div>
        {
          iconRight ? (
            <div className={styles.icon} onClick={rightClick}>
              <SvgIcon name={iconRight} />
            </div>
          ) : null
        }
      </div>
    );
}

export default NavBar;

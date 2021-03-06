import React, { FC } from 'react';
import cls from 'classnames';
import styles from './index.module.less';

export interface SvgIconProps {
  name: string;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const SvgIcon: FC<SvgIconProps> = ({ name, className, onClick = () => {} }) => {
  const clsName = className
    ? cls(styles['icon-svg'], className)
    : styles['icon-svg'];
  return (
    <svg className={clsName} aria-hidden="true" onClick={onClick}>
      <use xlinkHref={name} />
    </svg>
  );
};

export default SvgIcon;

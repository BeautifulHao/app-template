/* eslint-disable no-alert */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../../stores/user/actionCreators';
import styles from './index.module.less';
import SvgIcon from '../../components/icon-svg/index';
import avatarUrl from '../../assets/img/touxiang.webp';

const Profile = (props: any) => {
  const { userInfo = {}, LoginByUserDispatch, loginStatus } = props;

  useEffect(() => {
    LoginByUserDispatch('hello', 'world');
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.profile}>
        <div className={styles.avatar}>
          {
                        loginStatus ? (
                          <img src={avatarUrl} className={styles.img} alt="" />
                        ) : <SvgIcon name="#avatar" className={styles.icon} />
                    }
        </div>
        <div className={styles.desc}>
          <p className={styles.info}>
            {
                            !loginStatus ? '登陆/注册' : userInfo.name
                        }
          </p>
          <p className={styles.text}>
            <SvgIcon name="#iphone" className={styles.icon} />
            <span>
              {
                                !loginStatus ? '登陆后享受更多特权' : userInfo.ccity
                            }
            </span>
          </p>
        </div>
        <SvgIcon name="#right" className={styles.iconRight} />
      </div>

      <div className={styles.colums}>
        <div className={styles.item}>
          <div className={styles.icon}>
            <SvgIcon name="#gold" className={styles.icon} />
          </div>
          <p className={styles.desc}>钱包</p>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}>
            <SvgIcon name="#purse" className={styles.icon} />
          </div>
          <p className={styles.desc}>福袋</p>
        </div>
        <div className={styles.item}>
          <div className={styles.icon}>
            <SvgIcon name="#red-packet" className={styles.icon} />
          </div>
          <p className={styles.desc}>红包</p>
        </div>
      </div>

      <div className={styles.list}>
        <div className={styles.item} onClick={() => alert('/order')}>
          <div className={styles.icon}>
            <SvgIcon name="#drumstick" />
          </div>
          <p className={styles.desc}>我的订单</p>
          <SvgIcon name="#right" className={styles['icon-right']} />
        </div>
      </div>

      <div className={styles.list}>
        <div className={styles.item} onClick={() => alert('/address')}>
          <div className={styles.icon}>
            <SvgIcon name="#carrot" />
          </div>
          <p className={styles.desc}>我的地址</p>
          <SvgIcon name="#right" className={styles['icon-right']} />
        </div>
      </div>

    </div>
  );
};

// 映射Redux全局的state到组件的props上
const mapStateToProps = (state: any) => ({
  userInfo: state.getIn(['user', 'userInfo']),
  loginStatus: state.getIn(['user', 'loginStatus'])
});

// 映射dispatch到props上
const mapDispatchToProps = (dispatch: any) => {
  return {
    LoginByUserDispatch(userName: string, password: string) {
      dispatch(actionCreators.loginByUserName(userName, password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(withRouter(Profile)));

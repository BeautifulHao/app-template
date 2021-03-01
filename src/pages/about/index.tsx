/* eslint-disable no-console */
import React, { FC, useState } from 'react';
import { Button, Card, NavBar, Icon, Grid, Popover } from 'antd-mobile';
import styles from './index.module.less';

const { Item } = Popover;

const About: FC<any> = () => {
  const data = Array.from(new Array(36)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
    key: `${i}`
  }));

  const [rightState, setRightState] = useState({
    visible: false,
    selected: '',
  });

  const onSelect = (opt: any) => {
    setRightState({
      visible: false,
      selected: opt.props.value,
    });
  };

  const handleVisibleChange = (visible: boolean) => {
    setRightState({
      visible, selected: rightState.selected
    });
  };

  const myImg = (src: string) => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;

  return (
    <div className={styles.root}>
      <div className={styles.header} />
      <NavBar
        mode="dark"
        leftContent="关于"
        rightContent={[
          <Icon key="1" type="search" style={{ marginRight: '16px' }} />,
          <Popover
            key="2"
            mask
            visible={rightState.visible}
            overlay={[
              (<Item key="4" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">扫一扫</Item>),
              (<Item key="5" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>二维码</Item>),
              (<Item key="6" icon={myImg('uQIYTFeRrjPELImDRrPt')}><span style={{ marginRight: 5 }}>帮助</span></Item>),
            ]}
            align={{
              overflow: { adjustY: 0, adjustX: 0 }
            }}
            onVisibleChange={handleVisibleChange}
            onSelect={onSelect}
          >
            <div style={{
              height: '100%',
              padding: '0 15px',
              marginRight: '-15px',
              display: 'flex',
              alignItems: 'center',
            }}
            >
              <Icon type="ellipsis" key="8" />
            </div>
          </Popover>
        ]}
      />
      <Button>Ok</Button>
      <Card>
        <Card.Header
          title="This is title"
          thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
          extra={<span>this is extra</span>}
        />
        <Card.Body>
          <div>This is content of `Card`</div>
        </Card.Body>
        <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
      </Card>
      <Grid data={data} onClick={(_el) => console.log(_el)} />
    </div>
  );
};


export default About;

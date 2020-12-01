import React from 'react';
import { Button, Card, NavBar, Icon } from 'antd-mobile'

export default function index() {
  return (
    <div>
      <NavBar
        mode="dark"
        leftContent="关于"
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      ></NavBar>
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
    </div>
  );
}

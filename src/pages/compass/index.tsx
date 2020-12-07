import React, { FC } from 'react';
import NavBar from '../../components/nav-bar/index'

const Compass:FC<any> = (props:any) => {
  return (
    <div>
        <NavBar
          title="发现"
          iconLeft="#back"
          leftClick={() => props.history.goBack()} />
    </div>
  );
}

export default Compass;
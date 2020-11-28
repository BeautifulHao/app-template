import React from 'react';
import './index.less';
import axios from 'axios'

const Home: React.FC<any> = () => {

  const itemClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    axios({
      method: "get",
      url: "/api/getUserInfo",
      params: { id: '123' }
    }).then(data => {
      console.log(data)
    })

    axios({
      method: "post",
      url: "/api/updateUserInfo",
      data: { id: '123' }
    }).then(data => {
      console.log(data)
    })
  }

  return (
    <div className="sup-home">
      <span onClick={itemClick}>Hello World!</span>
    </div>
  );
};

export default Home;

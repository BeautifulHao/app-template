import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 开发阶段mock 数据
import './mock/index';


ReactDOM.render(<App />, document.getElementById('root'));

// 性能检测 Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

if (module.hot) {
    module.hot.accept(() => {
        ReactDOM.render(
            <App />,
            document.getElementById('root')
        );
    });
}

// TODO:参考React TS开源示例
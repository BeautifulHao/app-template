import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 开发阶段mock 数据
if(process.env.MOCK === "true"){
    require("./mock/index")
}

// requires and returns all modules that match
const requireAll = (requireContext:any) => requireContext.keys().map(requireContext)
// import all svg
const reqSvg = require.context('./assets/svg', true, /\.svg$/)
requireAll(reqSvg)


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
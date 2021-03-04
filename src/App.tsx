import React from 'react';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import store from './stores';
import routes from './routes';
import zhcn from './locale/zh-cn.json';

function App() {
  return (
    <Provider store={store}>
      <IntlProvider locale="zh-cn" messages={zhcn}>
        <HashRouter>{renderRoutes(routes)}</HashRouter>
      </IntlProvider>
    </Provider>
  );
}

export default App;

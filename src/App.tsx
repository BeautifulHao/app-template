import React from 'react';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { getLocalstorage } from './util/index';
import store from './stores';
import routes from './routes';
import zhcn from './locale/zh-cn.json';
import en from './locale/en.json';

function App() {
  const locale = getLocalstorage('locale') || 'zh-cn';
  const localeMessages = locale === 'en' ? en : zhcn;
  return (
    <Provider store={store}>
      <IntlProvider locale={locale} messages={localeMessages}>
        <HashRouter>{renderRoutes(routes)}</HashRouter>
      </IntlProvider>
    </Provider>
  );
}

export default App;

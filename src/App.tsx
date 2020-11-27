import React from 'react';
import { renderRoutes } from 'react-router-config';
// import store from "./store";
import { HashRouter } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    // <Provider store={store}>
    <HashRouter>
      {renderRoutes(routes)}
    </HashRouter>
    // </Provider>
  );
}

export default App;

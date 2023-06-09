import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import './responsive.css';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider store={store}>
  //   <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
          <BrowserRouter basename="SPA_test">
          <App />
          </BrowserRouter>
      </React.StrictMode>
  //   </PersistGate>

  // </Provider>

);

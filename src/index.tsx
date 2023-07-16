import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import reportWebVitals from './reportWebVitals';
import { App } from './components/App';
import i18n from './i18n/i18n';
import { Provider } from 'react-redux';
import { store } from './store'; 

import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback ={<div>Loading...</div>} />
    <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <App />
    </Provider>
    </I18nextProvider>
  </React.StrictMode>
);

reportWebVitals();

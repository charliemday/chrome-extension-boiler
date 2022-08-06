import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Popup from './Popup';
import './index.css';
import { store } from 'redux/store';

import 'assets/styles/tailwind.css';

render(
  <Provider store={store}>
    <Popup />
  </Provider>,
  window.document.querySelector('#app-container')
);

if (module.hot) module.hot.accept();

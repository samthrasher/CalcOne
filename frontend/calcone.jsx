import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import {configureStore} from './store/configure_store';

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();

  //test
  window.store = store;

  ReactDOM.render(
    <Root store={store}/>,
    document.getElementById("root")
  );
});

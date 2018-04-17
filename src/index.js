import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { Provider } from 'react-redux';
import Store from './store';

const store = Store();
const mountPoint = document.getElementById('root')

ReactDOM.render(
 <Provider store={store}>
   <App />
 </Provider>,
  mountPoint
);

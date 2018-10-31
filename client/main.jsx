import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.jsx';

import AppComponent from './components/AppComponent/App.jsx';
import './styles/style.less';

ReactDOM.render(
    <Provider store={store}>
        <AppComponent />
    </Provider>,
    document.getElementById('zeleney-app')
);
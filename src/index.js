import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {rootReducer} from 'rootReducer';
import { AppComponent } from './component/app';

var appStore = createStore(rootReducer);

ReactDOM.render((
    <Provider store={appStore}>
        <AppComponent/>
    </Provider>), document.getElementById('root'))
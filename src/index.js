import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {rootReducer} from 'rootReducer';

var appStore = createStore(rootReducer);

ReactDOM.render((<Provider store={appStore}></Provider>), document.getElementById('root'))
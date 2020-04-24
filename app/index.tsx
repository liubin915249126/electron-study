import React, { Fragment } from 'react';
import dva from 'dva'
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import './app.global.css';

const store = configureStore();

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;


const app = dva({
  history: require("history").createHashHistory(),
})

app.router(require('./Routes.tsx').default);

app.start('#root')

import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import './app.global.css';

const store = configureStore();

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;


const app = dva()
app.router(({ history, app: store }) => (
  <AppContainer>
      <Root store={store} history={history} />
    </AppContainer>
));
// app.model(Homes)
// app.model(main)
app.start('#root')

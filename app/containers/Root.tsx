import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader/root';
import { History } from 'history';
import { Store } from '../reducers/types';
import Routes from '../Routes';
import { HashRouter, Route, Redirect, Switch } from 'dva/router';

type Props = {
  store: Store;
  history: History;
};

const Root = ({ store, history }: Props) => (
  // <Provider store={store}>
    // <ConnectedRouter history={history}>
    <HashRouter>
            <Switch>
              <Routes />
            </Switch>
    </HashRouter>
  // </ConnectedRouter>
  // </Provider>
);

export default hot(Root);

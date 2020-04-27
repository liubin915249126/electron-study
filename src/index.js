import React from 'react'
import App from './App'
import dva from 'dva'
import 'antd/dist/antd.less';

const models = require.context('./model',false,/(\.js|\.jsx)$/)



import './index.less'
const app = dva()
app.router(({ history, app: store }) => (
  <App
    history={history}
    getState={store._store.getState}
    dispatch={store._store.dispatch}
  />
));

models.keys().forEach(key=>{ 
  app.model(models(key).default)
})

app.start('#root')
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore, { history } from 'src/store';
import * as serviceWorker from 'src/serviceWorker';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import 'antd/dist/antd.css';
import 'src/assets/icomoon/style.css';
import 'src/assets/style/main.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  TrangChu,
  GioiThieu,
  Page404
} from 'src/components/pages';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
        <Switch>
          <Route exact path="/" component={TrangChu} />
          <Route exact path="/gioi-thieu" component={GioiThieu} />
          <Route component={Page404} />
        </Switch>
      </Router>
    </ConnectedRouter>
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

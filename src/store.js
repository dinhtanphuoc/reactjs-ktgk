import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose as composeRedux, createStore } from 'redux';
import rootReducer from 'src/reducers';
import thunk from 'redux-thunk';

export const history = createBrowserHistory();

const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history)
];
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = composeRedux(
  applyMiddleware(
    ...middleware
  ),
  ...enhancers
);

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer(history),
    preloadedState,
    composedEnhancers
  );

  if (module.hot) {
    module.hot.accept('src/reducers', () => {
      store.replaceReducer(rootReducer(history));
    });
  }

  return store;
}
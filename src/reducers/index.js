import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import setting from './setting';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  setting
});

export default rootReducer;

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import setting from './setting';
import trangChu from './trangChu';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  setting,
  trangChu
});

export default rootReducer;

import { combineReducers } from 'redux';
import session from './session_reducer';
import applicationState from './application_state_reducer';

const rootReducer = combineReducers({
  session,
  applicationState
});

export default rootReducer;

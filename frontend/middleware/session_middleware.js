import {receiveCurrentUser, receiveErrors} from '../actions/auth_actions.js';
import SessionAPI from '../util/session_api_util.js';

const sessionMiddleware = ({getState, dispatch}) => next => action => {

  switch (action.type) {
    case 'LOGIN':
      SessionAPI.login(
        action.user,
        user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors))
      );
      break;
    case 'SIGN_UP':
      SessionAPI.signUp(
        action.user,
        user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors))
      );
      break;
    case 'LOGOUT': {
      const _next = () => next(action);
      SessionAPI.logout(_next, _next);
      break;
    }
    default:
      next(action);
  }
};

export default sessionMiddleware;

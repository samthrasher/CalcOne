import merge from 'lodash/merge';

const applicationStateReducer = (state = {}, action) => {
  switch(action.type) {
    case 'SET_LOGIN_MODAL_STATE':
      return merge({}, state, {loginModalIsOpen: action.state});
    default:
      return state;
  }
};

export default applicationStateReducer;

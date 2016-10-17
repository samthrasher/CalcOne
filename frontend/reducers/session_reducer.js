 const defaultState = {
  currentUser: null,
  errors: []
};

const sessionReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'RECEIVE_CURRENT_USER':
      return {
        currentUser: action.user,
        errors: []
      };
    case 'RECEIVE_ERRORS':
      return {
        currentUser: null,
        errors: action.errors
      };
    case 'LOGOUT':
      return defaultState;
    default:
      return state;
  }
};

export default sessionReducer;

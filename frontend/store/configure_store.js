import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer.js';
import rootMiddleware from '../middleware/root_middleware.js';

const defaultState = {
  session: {
      currentUser: window.currentUser,
      errors: []
    },
};

export const configureStore = (preloadedState = defaultState) => createStore(
  rootReducer,
  preloadedState,
  rootMiddleware
);

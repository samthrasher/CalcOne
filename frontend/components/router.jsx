import React, { PropTypes } from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './app.jsx';

class AppRouter extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
        </Route>
      </Router>
    );
  }
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;

import React, { PropTypes } from 'react';
import LoginModalContainer from './sitewide/login_modal_container';

const App = (props) => {
  return (
    <div id="main"> Welcome.
      <div>
        <LoginModalContainer/>
      </div>
    </div>

  );
};

export default App;

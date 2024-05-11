import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect';

import * as React from 'react';

function Responsive_View() {
  var myStyle = {
    fontSize: 100,
    color: '#FF0000',
  };
  const logo = '';

  return (
    <div>
      <BrowserView>
        <h1> This is rendered only in browser </h1>
        <h1 style={myStyle}>Header</h1>
        <h1> Use backgroundColor instead of background-color: </h1>
        <h1 style={{ backgroundColor: 'lightblue' }}>Hello inline styling!</h1>

        <img src={logo} className="App-logo" alt="logo" />
        <h1> conditional className  e.g className based on component props,</h1>

        <img src={logo} className={true ? 'selected-class' : 'normal-class'} alt="logo" />
      </BrowserView>

      <MobileView>
        <h1> This is rendered only on mobile </h1>
      </MobileView>
    </div>
  );
}

export default Responsive_View;

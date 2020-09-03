import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

var IMGDIR = process.env.REACT_APP_IMGDIR;
const bgImg = IMGDIR + "/images/unsplash.png";
const style={
  backgroundImage: `url(${bgImg})`,
  backgroundPosition: 'right',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}
class LandingPage extends React.Component {

  render () {

  return ( 
    <div>
      <div className="content">
        <div className="bgimg">
          <div className="text-content">
            <h1>Landing Page</h1>
          </div>
        </div>
    </div>
    <Switch>
      <Redirect from='*' to='/app' />
    </Switch>
    </div>
   );

  }
}

export default LandingPage;

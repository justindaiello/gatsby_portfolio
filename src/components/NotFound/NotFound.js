import React from 'react';

import NotFoundContainer from './NotFoundStyles';
import AnimatedLink from '../AnimatedLink';

function NotFound() {
  return (
    <NotFoundContainer>
      <div className="content">
        <h1>Oops, this page doesn't exist.</h1>
        <AnimatedLink to="/" text="Go Home" className="homeButton" />
      </div>
    </NotFoundContainer>
  );
}

export default NotFound;

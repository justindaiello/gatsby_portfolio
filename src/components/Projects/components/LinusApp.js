import React from 'react';
import { LinusAppDiv, GatsbyLink } from './ProjectComponentStyles';

function LinusApp() {
  return (
    <LinusAppDiv>
      <div className="purple">
        <GatsbyLink to="/linus">Linus App</GatsbyLink>
      </div>
      <div className="matchBody" />
    </LinusAppDiv>
  );
}

export default LinusApp;

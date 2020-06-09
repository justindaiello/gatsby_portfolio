import React from 'react';
import { LinusAppDiv, GatsbyLink } from './ProjectComponentStyles';

function LinusApp() {
  return (
    <LinusAppDiv>
      <div className="purple">
        <GatsbyLink
          swipe
          top="exit"
          direction="left"
          entryOffset={100}
          to="/linus"
        >
          Linus App
        </GatsbyLink>
      </div>
      <div className="matchBody" />
    </LinusAppDiv>
  );
}

export default LinusApp;

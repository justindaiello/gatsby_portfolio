import React from 'react';

import { LinusAppDiv } from './ProjectComponentStyles';
import AnimatedLink from '../../AnimatedLink';

function LinusApp() {
  return (
    <LinusAppDiv>
      <div className="purple">
        <AnimatedLink to="/linus" text="Linus App" />
      </div>
      <div className="matchBody" />
    </LinusAppDiv>
  );
}

export default LinusApp;

import React from 'react';

import { AprToApyDiv, ProjectLink } from './ProjectComponentStyles';

function AprToApy() {
  return (
    <AprToApyDiv>
      <div className="matchBody" />
      <div className="red">
        <ProjectLink
          href="https://www.aprtoapy.com/"
          target="_blank"
          rel="noopener noreferrer"
          variant="green"
        >
          Apr to Apy Calculator
        </ProjectLink>
      </div>
    </AprToApyDiv>
  );
}

export default AprToApy;

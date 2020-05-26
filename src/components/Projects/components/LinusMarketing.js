import React from 'react';
import { LinusMarketingDiv, ProjectLink } from './ProjectComponentStyles';

function LinusMarketing() {
  return (
    <LinusMarketingDiv>
      <div className="matchBody" />
      <div className="yellow">
        <ProjectLink
          href="https://getlinus.io"
          target="_blank"
          rel="noopener noreferrer"
          variant="purple"
        >
          Linus Marketing
        </ProjectLink>
      </div>
    </LinusMarketingDiv>
  );
}

export default LinusMarketing;

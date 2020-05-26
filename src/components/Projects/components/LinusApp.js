import React from 'react';
import { LinusAppDiv, ProjectLink } from './ProjectComponentStyles';

function LinusApp() {
  return (
    <LinusAppDiv>
      <div className="purple">
        <ProjectLink
          href="https://app.getlinus.io"
          target="_blank"
          rel="noopener noreferrer"
          variant="green"
        >
          Linus App
        </ProjectLink>
      </div>
      <div className="matchBody" />
    </LinusAppDiv>
  );
}

export default LinusApp;

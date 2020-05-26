import React from 'react';

import { GoAdventureDiv, ProjectLink } from './ProjectComponentStyles';

function GoAdventure() {
  return (
    <GoAdventureDiv>
      <div className="green">
        <ProjectLink
          href="https://app.getlinus.io"
          target="_blank"
          rel="noopener noreferrer"
          variant="yellow"
        >
          GoAdventure Store
        </ProjectLink>
      </div>
      <div className="matchBody" />
    </GoAdventureDiv>
  );
}

export default GoAdventure;

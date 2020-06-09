import React from 'react';

import { GoAdventureDiv, ProjectLink } from './ProjectComponentStyles';

function GoAdventure() {
  return (
    <GoAdventureDiv>
      <div className="green">
        <ProjectLink
          href="https://github.com/justindaiello/react_store"
          target="_blank"
          rel="noopener noreferrer"
          variant="yellow"
        >
          Go Adventure Store
        </ProjectLink>
      </div>
      <div className="matchBody" />
    </GoAdventureDiv>
  );
}

export default GoAdventure;

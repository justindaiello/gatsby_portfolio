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
          React/GraphQL Project
        </ProjectLink>
      </div>
      <div className="matchBody" />
    </GoAdventureDiv>
  );
}

export default GoAdventure;

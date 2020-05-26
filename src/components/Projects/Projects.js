import React from 'react';

import StyledContainer from './ProjectStyles';
import LinusApp from './components/LinusApp';
import LinusMarketing from './components/LinusMarketing';
import GoAdventure from './components/GoAdventure';

function Projects() {
  return (
    <StyledContainer>
      <LinusApp />
      <LinusMarketing />
      <GoAdventure />
    </StyledContainer>
  );
}

export default Projects;

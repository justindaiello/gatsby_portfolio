import React from 'react';
import { object } from 'prop-types';

import StyledContainer from './ProjectStyles';
import LinusApp from './components/LinusApp';
import LinusMarketing from './components/LinusMarketing';
import GoAdventure from './components/GoAdventure';
import AprToApy from './components/AprToApy';
import Portfolio from './components/Portfolio';

function Projects({ projectRef }) {
  return (
    <StyledContainer ref={projectRef}>
      <LinusApp />
      <LinusMarketing />
      <GoAdventure />
      <AprToApy />
      <Portfolio />
    </StyledContainer>
  );
}

Projects.propTypes = {
  projectRef: object,
};

export default Projects;

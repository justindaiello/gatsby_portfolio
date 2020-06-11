import React from 'react';

import { PortfolioDiv, ProjectLink } from './ProjectComponentStyles';

function Portfolio() {
  return (
    <PortfolioDiv>
      <div className="blue">
        <ProjectLink
          href="https://github.com/justindaiello/gatsby_portfolio/"
          target="_blank"
          rel="noopener noreferrer"
          variant="purple"
        >
          Portfolio Site GitHub
        </ProjectLink>
        <div className="matchBody" />
      </div>
    </PortfolioDiv>
  );
}

export default Portfolio;

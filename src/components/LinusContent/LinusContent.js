import React from 'react';

import AnimatedLink from '../AnimatedLink';
import BuiltWith from './components/BuiltWith';
import ScreenShots from './components/ScreenShots';
import { ContentContainer, StyledLink } from './LinusStyles';

function LinusContent() {
  return (
    <ContentContainer>
      <AnimatedLink to="/" text="Home" className="homeLink" />
      <h1>Linus App</h1>
      <StyledLink
        variant="blue"
        href="https://app.getlinus.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Live Site
      </StyledLink>
      <BuiltWith />
      <ScreenShots />
    </ContentContainer>
  );
}

export default LinusContent;

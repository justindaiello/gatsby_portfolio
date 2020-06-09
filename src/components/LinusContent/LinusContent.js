import React from 'react';

import { ContentContainer, StyledLink } from './LinusStyles';
import { GatsbyLink } from '../Projects/components/ProjectComponentStyles';
import BuiltWith from './components/BuiltWith';
import ScreenShots from './components/ScreenShots';

function LinusContent() {
  return (
    <ContentContainer>
      <GatsbyLink
        swipe
        direction="right"
        top="entry"
        entryOffset={100}
        to="/"
        className="homeLink"
      >
        Home
      </GatsbyLink>
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

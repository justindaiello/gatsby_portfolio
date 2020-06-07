import React from 'react';

import { ContentContainer, StyledLink } from './LinusStyles';
import BuiltWith from './components/BuiltWith';
import ScreenShots from './components/ScreenShots';

function LinusContent() {
  return (
    <ContentContainer>
      <h1>Linus App</h1>
      <StyledLink variant="blue" href="#">
        Visit Live Site
      </StyledLink>
      <BuiltWith />
      <ScreenShots />
    </ContentContainer>
  );
}

export default LinusContent;

import React from 'react';

import AnimatedLink from '../AnimatedLink';
import BuiltWith from './components/BuiltWith';
import ScreenShots from './components/ScreenShots';
import Intro from './components/Intro';
import { ContentContainer } from './LinusStyles';

function LinusContent() {
  return (
    <ContentContainer>
      <AnimatedLink to="/" text="Home" className="homeLink" />
      {/* <BuiltWith /> */}
      <Intro />
      <ScreenShots />
    </ContentContainer>
  );
}

export default LinusContent;

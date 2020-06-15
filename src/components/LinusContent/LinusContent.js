import React from 'react';

import AnimatedLink from '../AnimatedLink';
import BuiltWith from './components/BuiltWith';
import ScreenShots from './components/ScreenShots';
import Intro from './components/Intro';
import { ContentContainer } from './LinusStyles';

function LinusContent() {
  const builtWithRef = React.useRef(null);
  return (
    <ContentContainer>
      <AnimatedLink to="/" text="Home" className="homeLink" />
      <Intro builtWithRef={builtWithRef} />
      <BuiltWith builtWithRef={builtWithRef} />
      <ScreenShots />
    </ContentContainer>
  );
}

export default LinusContent;

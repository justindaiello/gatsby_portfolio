import React from 'react';

import { StyledHeader } from './LinusStyles';
import BuiltWith from './components/BuiltWith';
import ScreenShots from './components/ScreenShots';

function LinusContent() {
  return (
    <div>
      <StyledHeader>Linus App</StyledHeader>
      <BuiltWith />
      <ScreenShots />
    </div>
  );
}

export default LinusContent;

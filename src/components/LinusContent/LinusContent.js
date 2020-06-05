import React from 'react';

import { StyledHeader } from './LinusStyles';
import BuiltWith from './components/BuiltWith';

function LinusContent() {
  return (
    <div>
      <StyledHeader>Linus App</StyledHeader>
      <BuiltWith />
    </div>
  );
}

export default LinusContent;

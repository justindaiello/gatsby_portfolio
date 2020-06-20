import React from 'react';

import SEO from '../components/SEO/SEO';
import LinusContent from '../components/LinusContent';
import TransitionSpring from '../components/TransitionSpring';

function LinusPage() {
  return (
    <TransitionSpring>
      <SEO title="Linus App" />
      <LinusContent />
    </TransitionSpring>
  );
}

export default LinusPage;

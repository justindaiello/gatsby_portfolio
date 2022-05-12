import React from 'react';

import SEO from '../components/SEO/SEO';
import LinusContent from '../components/LinusContent';
import TransitionSpring from '../components/TransitionSpring';

function LinusPage() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <TransitionSpring>
      <SEO title="Linus App" />
      <LinusContent />
    </TransitionSpring>
  );
}

export default LinusPage;

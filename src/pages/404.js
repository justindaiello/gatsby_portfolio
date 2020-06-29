import React from 'react';

import SEO from '../components/SEO/SEO';
import NotFound from '../components/NotFound';
import TransitionSpring from '../components/TransitionSpring';

function NotFoundPage() {
  return (
    <TransitionSpring>
      <SEO title=" 404: Not Found" />
      <NotFound />
    </TransitionSpring>
  );
}

export default NotFoundPage;

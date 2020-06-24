import React from 'react';

import SEO from '../components/SEO/SEO';
import NotFound from '../components/NotFound';

function NotFoundPage() {
  return (
    <>
      <SEO title=" 404: Not Found" />
      <NotFound />
    </>
  );
}

export default NotFoundPage;

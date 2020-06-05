import React from 'react';

import PrimaryLayout from '../layouts/PrimaryLayout';
import SEO from '../components/SEO/SEO';
import LinusContent from '../components/LinusContent';

function LinusPage() {
  return (
    <PrimaryLayout>
      <SEO title="Linus App" />
      <LinusContent />
    </PrimaryLayout>
  );
}

export default LinusPage;

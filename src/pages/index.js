import React from 'react';

import SEO from '../components/SEO/SEO';
import Hero from '../components/Hero';
import Header from '../components/Header';
import PrimaryLayout from '../layouts/PrimaryLayout';

export default () => {
  const [isHidden, setIsHidden] = React.useState(true);

  return (
    <PrimaryLayout>
      <SEO title="Asheville, NC" />
      <Header setIsHidden={setIsHidden} isHidden={isHidden} />
      <Hero isHidden={isHidden} />
    </PrimaryLayout>
  );
};

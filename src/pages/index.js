import React from 'react';

import Hero from '../components/Hero';
import SEO from '../components/SEO/SEO';
import Header from '../components/Header';
import Projects from '../components/Projects';
import PrimaryLayout from '../layouts/PrimaryLayout';

export default () => {
  const [isHidden, setIsHidden] = React.useState(true);

  return (
    <PrimaryLayout>
      <SEO title="Asheville, NC" />
      <Header setIsHidden={setIsHidden} isHidden={isHidden} />
      <Hero isHidden={isHidden} />
      <Projects />
    </PrimaryLayout>
  );
};

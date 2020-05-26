import React from 'react';

import Hero from '../components/Hero';
import SEO from '../components/SEO/SEO';
import Header from '../components/Test';
import Projects from '../components/Projects';
import PrimaryLayout from '../layouts/PrimaryLayout';

export default () => {
  const [isHidden, setIsHidden] = React.useState(true);
  const projectRef = React.useRef(null);

  return (
    <PrimaryLayout>
      <SEO title="Asheville, NC" />
      <Header
        setIsHidden={setIsHidden}
        isHidden={isHidden}
        projectRef={projectRef}
      />
      <Hero isHidden={isHidden} />
      <Projects projectRef={projectRef} />
    </PrimaryLayout>
  );
};

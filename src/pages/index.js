import React from 'react';

import Hero from '../components/Hero';
import SEO from '../components/SEO/SEO';
import Header from '../components/Header';
import Projects from '../components/Projects';
import PrimaryLayout from '../layouts/PrimaryLayout';

function IndexPage() {
  const projectRef = React.useRef(null);

  return (
    <PrimaryLayout>
      <SEO title="Asheville, NC" />
      <Header projectRef={projectRef} />
      <Hero />
      <Projects projectRef={projectRef} />
    </PrimaryLayout>
  );
}

export default IndexPage;

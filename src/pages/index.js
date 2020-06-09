import React from 'react';

import Hero from '../components/Hero';
import SEO from '../components/SEO/SEO';
import Header from '../components/Header';
import Projects from '../components/Projects';

function IndexPage() {
  const projectRef = React.useRef(null);

  return (
    <>
      <SEO title="Asheville, NC" />
      <Header projectRef={projectRef} />
      <Hero />
      <Projects projectRef={projectRef} />
    </>
  );
}

export default IndexPage;

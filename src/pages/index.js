import React from 'react';

import Hero from '../components/Hero';
import SEO from '../components/SEO/SEO';
import Header from '../components/Header';
import Projects from '../components/Projects';
import TransitionSpring from '../components/TransitionSpring';

function IndexPage() {
  const projectRef = React.useRef(null);

  return (
    <TransitionSpring>
      <SEO title="Asheville, NC" />
      <Header projectRef={projectRef} />
      <Hero />
      <Projects projectRef={projectRef} />
    </TransitionSpring>
  );
}

export default IndexPage;

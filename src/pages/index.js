import React from 'react';
import { Spring, animated } from 'react-spring/renderprops';
import { TransitionState } from 'gatsby-plugin-transition-link';

import Hero from '../components/Hero';
import SEO from '../components/SEO/SEO';
import Header from '../components/Header';
import Projects from '../components/Projects';

function TransitionSpring({ children }) {
  return (
    <TransitionState>
      {({ transitionStatus, exit, entry }) => {
        const mount = ['entering', 'entered'].includes(transitionStatus);
        const seconds = mount ? entry.length : exit.length;

        return (
          <Spring
            native
            to={{
              opacity: mount ? 1 : 0,
            }}
            config={{
              duration: seconds * 650,
            }}
          >
            {(props) => <animated.div style={props}>{children}</animated.div>}
          </Spring>
        );
      }}
    </TransitionState>
  );
}

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

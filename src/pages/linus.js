import React from 'react';
import { Spring, animated } from 'react-spring/renderprops';
import { TransitionState } from 'gatsby-plugin-transition-link';

import SEO from '../components/SEO/SEO';
import LinusContent from '../components/LinusContent';

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
              transform: `translateX(${mount ? 0 : '75%'})`,
              opacity: mount ? 1 : 0,
            }}
            config={{
              duration: seconds * 500,
            }}
          >
            {(props) => <animated.div style={props}>{children}</animated.div>}
          </Spring>
        );
      }}
    </TransitionState>
  );
}

function LinusPage() {
  return (
    <TransitionSpring>
      <SEO title="Linus App" />
      <LinusContent />
    </TransitionSpring>
  );
}

export default LinusPage;

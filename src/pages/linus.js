import React from 'react';
import { Spring } from 'react-spring/renderprops';
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
            to={{
              transform: `translateX(${mount ? 0 : '100%'})`,
              opacity: mount ? 1 : 0,
            }}
            config={{
              duration: seconds * 650,
            }}
          >
            {(props) => <div style={props}>{children}</div>}
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

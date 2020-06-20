import React from 'react';
import { object } from 'prop-types';
import { Spring, animated } from 'react-spring/renderprops';
import { TransitionState } from 'gatsby-plugin-transition-link';

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

TransitionSpring.propTypes = {
  children: object,
};

export default TransitionSpring;

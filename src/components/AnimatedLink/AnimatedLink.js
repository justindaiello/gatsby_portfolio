import React from 'react';
import { string } from 'prop-types';

import { StyledLink } from './AnimatedLinkStyles';

const propTypes = {
  text: string,
  to: string,
  className: string,
};

function AnimatedLink({ text, to, className }) {
  return (
    <StyledLink
      to={to}
      exit={{ length: 0 }}
      entry={{ length: 1 }}
      className={className}
    >
      {text}
    </StyledLink>
  );
}

AnimatedLink.propTypes = propTypes;

export default AnimatedLink;

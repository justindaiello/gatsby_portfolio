import React from 'react';
import { StyledLink } from './AnimatedLinkStyles';

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

export default AnimatedLink;

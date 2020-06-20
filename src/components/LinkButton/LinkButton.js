import React from 'react';
import { string } from 'prop-types';

import StyledLinkButton from './LinkButtonStyles';

const propTypes = {
  href: string,
  text: string,
  className: string,
};

function LinkButton({ href, text, className }) {
  return (
    <StyledLinkButton
      href={href}
      target="_blank"
      real="noopener noreferrer"
      className={className}
    >
      {text}
    </StyledLinkButton>
  );
}

LinkButton.propTypes = propTypes;

export default LinkButton;

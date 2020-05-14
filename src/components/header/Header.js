import React from 'react';
import { bool } from 'prop-types';
import { StyledHeader, StyledButton } from './HeaderStyles';

const Header = ({ setIsHidden, isHidden }) => {
  return (
    <StyledHeader>
      <StyledButton onClick={() => setIsHidden(!isHidden)}>About</StyledButton>
      <StyledButton>Work</StyledButton>
    </StyledHeader>
  );
};

Header.propTypes = {
  hidden: bool,
};

export default Header;

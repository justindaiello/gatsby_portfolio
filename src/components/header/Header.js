import React from 'react';
import { StyledHeader, StyledButton } from './HeaderStyles';

const Header = () => {
  return (
    <StyledHeader>
      <StyledButton>About</StyledButton>
      <StyledButton>Work</StyledButton>
    </StyledHeader>
  );
};

export default Header;

import React from 'react';
import { StyledHeader, StyledLink } from './HeaderStyles';

const Header = () => {
  return (
    <StyledHeader>
      <StyledLink to="#">About</StyledLink>
      <StyledLink to="work">Work</StyledLink>
    </StyledHeader>
  );
};

export default Header;

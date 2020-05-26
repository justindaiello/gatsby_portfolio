import React from 'react';
import { bool, func, object } from 'prop-types';
import { StyledHeader, StyledButton } from './HeaderStyles';

const Header = ({ setIsHidden, isHidden, projectRef }) => {
  function handleScrollDown() {
    projectRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  return (
    <StyledHeader>
      <StyledButton onClick={() => setIsHidden(!isHidden)}>About</StyledButton>
      <StyledButton onClick={handleScrollDown}>Work</StyledButton>
    </StyledHeader>
  );
};

Header.propTypes = {
  hidden: bool,
  setIsHidden: func,
  projectRef: object,
};

export default Header;

import React from 'react';
import { useDispatch } from 'react-redux';

import actions from '../../context/actions';
import { StyledHeader, StyledButton } from './HeaderStyles';
/* TODO: use this for new stuff import { handleScrollDown } from '../../utils/functions'; */

const Header = () => {
  const dispatch = useDispatch();

  function handleAboutClick() {
    dispatch(actions.setIsHidden());
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  return (
    <StyledHeader>
      <StyledButton onClick={handleAboutClick}>About</StyledButton>
    </StyledHeader>
  );
};

export default Header;

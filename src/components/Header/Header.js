import React from 'react';
import { bool, func, object } from 'prop-types';
import { useDispatch } from 'react-redux';

import actions from '../../context/actions';
import { StyledHeader, StyledButton } from './HeaderStyles';
import { handleScrollDown } from '../../utils/functions';

const Header = ({ projectRef }) => {
  const dispatch = useDispatch();

  function handleAboutClick() {
    dispatch(actions.setIsHidden());
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  return (
    <StyledHeader>
      <StyledButton onClick={handleAboutClick}>About</StyledButton>
      <StyledButton onClick={() => handleScrollDown(projectRef)}>
        Work
      </StyledButton>
    </StyledHeader>
  );
};

Header.propTypes = {
  hidden: bool,
  setIsHidden: func,
  projectRef: object,
};

export default Header;

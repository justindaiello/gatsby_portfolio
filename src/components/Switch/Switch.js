import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { StyledSwitch } from './SwitchStyles';

function Switch({ handleClick, title }) {
  const { hasDarkTheme } = useSelector((state) => state);

  function toggle() {
    handleClick();
  }

  return (
    <StyledSwitch title={title} onClick={toggle} hasDarkTheme={hasDarkTheme}>
      <span
        className={hasDarkTheme === 'dark' ? 'circleLeft' : 'circleRight'}
      />
    </StyledSwitch>
  );
}

PropTypes.Switch = {
  handleClick: PropTypes.func,
  title: PropTypes.string,
};

export default Switch;

import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import actions from '../../context/actions';
import { StyledSwitch } from './SwitchStyles';

function Switch({ handleClick, title }) {
  const dispatch = useDispatch();
  const { isOn } = useSelector((state) => state);

  function toggle() {
    handleClick();
    dispatch(actions.setIsOn());
  }

  return (
    <StyledSwitch title={title} onClick={toggle} isOn={isOn}>
      <span className={!isOn ? 'circleLeft' : 'circleRight'} />
    </StyledSwitch>
  );
}

PropTypes.Switch = {
  handleClick: PropTypes.func,
  title: PropTypes.string,
};

export default Switch;

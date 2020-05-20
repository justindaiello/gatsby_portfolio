import React from 'react';
import PropTypes from 'prop-types';

import { StyledSwitch } from './SwitchStyles';

function Switch({ handleClick, title }) {
  const [isOn, setIsOn] = React.useState(false);

  function toggle() {
    handleClick();
    setIsOn(!isOn);
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

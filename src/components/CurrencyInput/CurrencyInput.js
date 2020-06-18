import React from 'react';
import PropTypes from 'prop-types';

import StyledNumberInput from './CurrencyInputStyles';

const propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

function CurrencyInput({ name, placeholder, ...props }) {
  return (
    <StyledNumberInput
      id={name}
      name={name}
      prefix={'$'}
      decimalScale={2}
      autoComplete="off"
      placeholder={placeholder}
      allowNegative={false}
      allowLeadingZeros={false}
      fixedDecimalScale
      {...props}
    />
  );
}

CurrencyInput.propTypes = propTypes;

export default CurrencyInput;

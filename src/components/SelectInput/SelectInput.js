import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { primarySelect } from './SelectInputStyles';

const propTypes = {
  isClearable: PropTypes.bool,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

function SelectInput({
  isClearable,
  placeholder,
  name,
  onChange,
  options,
  ...props
}) {
  return (
    <>
      <Select
        styles={primarySelect}
        isClearable={isClearable}
        placeholder={placeholder}
        name={name}
        inputId={name}
        onChange={onChange}
        options={options}
        {...props}
      />
    </>
  );
}

SelectInput.propTypes = propTypes;

export default SelectInput;

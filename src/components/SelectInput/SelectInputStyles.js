export const primarySelect = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: '12px',
    width: '100%',
    height: '56px',
    fontWeight: 'bold',
    padding: '0.3rem 0.3rem',
    border: state.isFocused ? '1px solid #87B3C7' : '1px solid #87B3C7',
    boxShadow: state.isFocused && '0 0 0 0.1rem #87B3C7',
    borderColor: state.isHovered && '#87B3C7',
    '&:hover': {
      borderColor: '1px solid #87B3C7',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    '&:hover': {
      backgroundColor: '#87B3C7',
      color: '#fff',
    },
    backgroundColor: state.isSelected && '#fff',
    color: state.isSelected && '#111219',
  }),
  indicatorSeparator: () => ({ display: 'none' }),
};

import styled from 'styled-components';
import NumberFormat from 'react-number-format';

const StyledNumberInput = styled(NumberFormat)`
  height: 56px;
  width: 100%;
  padding: 0 20px;
  border-radius: 12px;
  border: none;
  border: 1px solid ${(props) => props.theme.accent};
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.05);

  &::placeholder {
    color: #333;
    opacity: 0.5;
  }

  &:focus {
    border-color: ${(props) => props.theme.accent};
    box-shadow: 0 0 0 0.1rem ${(props) => props.theme.accent};
    outline: none;
  }
`;

export default StyledNumberInput;

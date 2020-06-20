import styled from 'styled-components';

const StyledLinkButton = styled.a`
  padding: 1.5rem 4rem;
  border-radius: 25px;
  background: ${(props) => props.theme.accent};
  color: #fff;
  text-decoration: none;
  box-shadow: ${(props) => props.theme.boxShadow};
  position: relative;

  &:hover {
    background: #639bb6;
    transition: all 0.2s;
    cursor: pointer;
  }

  &:after {
    content: '';
    position: absolute;
    top: -6px;
    right: -6px;
    bottom: -6px;
    left: -6px;
    border: 2px solid transparent;
    border-radius: 30px;
    background: transparent;
  }

  &:focus {
    outline: none;

    &:after {
      border-color: ${(props) => props.theme.accent};
    }
  }
`;

export default StyledLinkButton;

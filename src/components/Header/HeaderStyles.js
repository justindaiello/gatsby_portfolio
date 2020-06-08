import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
  z-index: 99;

  @media (max-width: 600px) {
    position: relative;
  }
`;

const StyledButton = styled.button`
  color: ${(props) => props.theme.text};
  padding: 0rem 3rem;
  text-transform: uppercase;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;

  &:before {
    content: '';
    width: 2px;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    bottom: 0;
  }

  &:after {
    height: 2px;
    background: ${(props) => props.theme.accent};
    content: '';
    width: 0;
    position: absolute;
    transform: translateX(-50%);
    transition: width 0.4s;
    transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
    left: 50%;
    bottom: -5px;
  }

  &:hover,
  &:focus {
    outline: none;

    &:after {
      width: calc(100% - 60px);
    }
  }

  @media (max-width: 700px) {
    &:focus {
      outline: 2px solid ${(props) => props.theme.accent};
    }

    &:after {
      background: none;
    }
  }

  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;

export { StyledHeader, StyledButton };

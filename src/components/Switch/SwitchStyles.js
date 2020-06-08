import styled from 'styled-components';

const StyledSwitch = styled.button`
  position: fixed;
  right: 6rem;
  top: 2rem;
  display: inline-block;
  width: 45px;
  height: 25px;
  border: none;
  ${(props) => (props.isOn ? `background: #393939` : `background: #F9F9F8`)};
  border-radius: 19px;
  z-index: 99;
  box-shadow: ${(props) => props.theme.lightBoxShadow};
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    top: -6px;
    right: -6px;
    bottom: -6px;
    left: -6px;
    border: 2px solid transparent;
    border-radius: 19px;
    background: transparent;
  }

  &:focus {
    outline: none;

    &:after {
      border-color: ${(props) => props.theme.accent};
    }
  }

  .circleLeft,
  .circleRight {
    position: absolute;
    cursor: pointer;
    height: 19px;
    width: 19px;
    left: 3px;
    bottom: 3px;
    background: #393939;
    transition: 0.5s;
    border-radius: 100%;
  }

  .circleRight {
    transform: translateX(20px);
    background: #f9f9f8;
    height: 17px;
    width: 17px;
    bottom: 4px;
  }

  @media (max-width: 600px) {
    right: 2.75rem;
  }
`;

export { StyledSwitch };

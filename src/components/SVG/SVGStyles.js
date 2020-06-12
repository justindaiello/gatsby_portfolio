import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const floatLong = keyframes`
  0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-70px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const StyledSvg = styled.svg`
  fill: none;
  position: absolute;
  overflow: visible;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  stroke: ${(props) => (props.color ? props.color : props.theme.text)};
  animation: ${(props) => (props.long ? floatLong : float)} 6s ease-in-out
    infinite;
  display: ${(props) => props.isHidden && 'none'};
  transition: all 0.2s;
`;

export { StyledSvg };

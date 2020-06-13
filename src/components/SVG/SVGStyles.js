import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% {
		transform: translatey(-40px);
	}
	50% {
		transform: translatey(0px);
	}
	100% {
		transform: translatey(-40px);
	}
`;
const floatMed = keyframes`
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

const floatLong = keyframes`
  0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-90px);
	}
	100% {
		transform: translatey(0px);
	}
`;

function handleAnimation(variant) {
  switch (variant) {
    case 'long': {
      return floatLong;
    }
    case 'medium': {
      return floatMed;
    }
    default:
      return float;
  }
}

const StyledSvg = styled.svg`
  fill: none;
  position: absolute;
  overflow: visible;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  stroke: ${(props) => (props.color ? props.color : props.theme.text)};
  animation: ${(props) => handleAnimation(props.animation)} 6s ease-in-out
    infinite;
  display: ${(props) => (props.isHidden || props.isMobile) && 'none'};
  transition: all 0.2s;

  @media (max-width: 800px) {
    display: ${(props) =>
      !props.isMobile || (props.isMobile && props.isHidden) ? 'none' : 'block'};
  }
`;

export { StyledSvg };

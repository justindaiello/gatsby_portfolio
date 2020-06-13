import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% {
		transform: translateY(-40px);
	}
	50% {
		transform: translateY(0px);
	}
	100% {
		transform: translateY(-40px);
	}
`;
const floatMed = keyframes`
  0% {
		transform: translateY(0px);
	}
	50% {
		transform: translateY(-70px);
	}
	100% {
		transform: translateY(0px);
	}
`;

const floatLong = keyframes`
  0% {
		transform: translateY(0px);
	}
	50% {
		transform: translateY(-90px);
	}
	100% {
		transform: translateY(0px);
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

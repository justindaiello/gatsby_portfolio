import styled from 'styled-components';

const StyledMain = styled.main`
  .top {
    height: 100vh;
  }

  background: ${(props) => props.theme.body};
  transition: all 0.2s ease;
`;

const StyledImg = styled.img`
  position: fixed;
  bottom: -235px;
  left: -300px;
  z-index: 0;
  transform: rotate(10deg);

  @media (max-width: 600px) {
    bottom: -445px;
    left: -500px;
  }
`;

export { StyledImg, StyledMain };

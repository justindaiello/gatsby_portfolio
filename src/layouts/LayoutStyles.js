import styled from 'styled-components';

const StyledMain = styled.main`
  .top {
    height: 100vh;
  }
`;

const StyledImg = styled.img`
  position: fixed;
  bottom: -235px;
  left: -300px;
  z-index: -1;
  transform: rotate(10deg);

  @media (max-width: 600px) {
    bottom: -335px;
    left: -400px;
  }

  @media (max-width: 320px) {
    bottom: -445px;
    left: -500px;
  }
`;

export { StyledImg, StyledMain };

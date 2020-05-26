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
`;

export { StyledImg, StyledMain };

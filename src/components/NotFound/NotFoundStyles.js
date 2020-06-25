import styled from 'styled-components';

const NotFoundContainer = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  position: relative;

  .content {
    position: absolute;
    width: 100%;
    text-align: center;
    top: 30%;
    padding: 0 2rem;

    h1 {
      font-size: 3rem;
      font-weight: 700;
    }

    .homeButton {
      display: inline-block;
    }
  }
`;

export default NotFoundContainer;

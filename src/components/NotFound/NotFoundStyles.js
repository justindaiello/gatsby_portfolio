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

    .homeButton {
      display: inline-block;
    }
  }
`;

export default NotFoundContainer;

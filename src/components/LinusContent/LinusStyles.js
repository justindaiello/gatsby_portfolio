import styled from 'styled-components';

const ContentContainer = styled.div`
  text-align: center;

  .homeLink {
    position: absolute;
    font-size: 1.5rem;
    left: 20px;
    top: 15px;
  }

  @media (max-width: 600px) {
    .homeLink {
      left: 0;
    }
  }
`;

export { ContentContainer };

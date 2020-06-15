import styled from 'styled-components';

const ContentContainer = styled.div`
  text-align: center;

  .homeLink {
    position: absolute;
    font-size: 1.5rem;
    left: 20px;
    top: 15px;
  }

  h1 {
    font-size: 4rem;
    font-weight: 300;
    margin: 0 0 1rem;
    color: ${(props) => props.theme.text};
    padding-top: 2rem;
  }

  @media (max-width: 600px) {
    .homeLink {
      left: 0;
    }

    h1 {
      padding-top: 5rem;
    }
  }
`;

export { ContentContainer };

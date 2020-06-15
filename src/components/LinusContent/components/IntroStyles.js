import styled from 'styled-components';

const StyledIntroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  align-content: center;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
  grid-gap: 5rem;

  .left {
    color: ${(props) => props.theme.text};
    text-align: left;
    align-self: center;
    padding-left: 2rem;

    h1 {
      font-size: 5rem;
      font-weight: 700;
      margin-bottom: 0;
    }

    h2 {
      margin: 0;
    }

    p {
      margin-bottom: 5rem;
    }
  }

  .chartImage {
    width: 375px;
    border-radius: 12px;
    image-rendering: crisp-edges;
    justify-self: center;
  }

  @media (max-width: 999px) {
    grid-template-columns: 1fr;
    grid-gap: 8rem 0;
    margin: 5rem 2rem 0;

    .left {
      max-width: 600px;
      justify-self: center;
      padding: 0;
    }
  }
`;

const StyledLinkButton = styled.a`
  padding: 1.5rem 4rem;
  border-radius: 25px;
  background: ${(props) => props.theme.accent};
  color: #fff;
  text-decoration: none;

  &:hover {
    background: #639bb6;
    transition: all 0.2s;
    cursor: pointer;
  }
`;

export { StyledIntroContainer, StyledLinkButton };

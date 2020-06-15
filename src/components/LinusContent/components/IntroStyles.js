import styled from 'styled-components';

const StyledIntroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  align-content: center;
  justify-content: center;
  max-width: 1100px;
  margin: 5rem auto;
  grid-gap: 5rem;

  .left {
    color: ${(props) => props.theme.text};
    text-align: left;
    align-self: center;
    padding-left: 2rem;

    h1 {
      font-size: 5rem;
      font-weight: 700;
      margin: 0;
    }

    h2 {
      margin: 0;
      line-height: 3rem;
    }

    p {
      margin-bottom: 5rem;
      line-height: 2.5rem;
    }
  }

  .chartImage {
    width: 375px;
    border-radius: 12px;
    image-rendering: crisp-edges;
    justify-self: center;
  }

  .readMore {
    display: inline-block;
    grid-column: 1 / 3;
    justify-self: center;
    color: ${(props) => props.theme.text};
    background: transparent;
    border: none;
    cursor: pointer;

    &:focus {
      outline: 2px solid ${(props) => props.theme.accent};
    }
  }

  @media (max-width: 1100px) {
    margin: 0 2rem;
    min-height: none;
  }

  @media (max-width: 999px) {
    grid-template-columns: 1fr;
    grid-gap: 8rem 0;
    margin: 5rem 2rem 0;

    .readMore {
      display: none;
    }

    .left {
      max-width: 600px;
      justify-self: center;
      padding: 0 2rem;
    }
  }

  @media (max-width: 450px) {
    margin: 7rem 2rem 0;

    .left {
      text-align: center;

      p {
        text-align: left;
      }
    }
  }
`;

const StyledLinkButton = styled.a`
  padding: 1.5rem 4rem;
  border-radius: 25px;
  background: ${(props) => props.theme.accent};
  color: #fff;
  text-decoration: none;
  box-shadow: ${(props) => props.theme.boxShadow};
  position: relative;

  &:hover {
    background: #639bb6;
    transition: all 0.2s;
    cursor: pointer;
  }

  &:after {
    content: '';
    position: absolute;
    top: -6px;
    right: -6px;
    bottom: -6px;
    left: -6px;
    border: 2px solid transparent;
    border-radius: 30px;
    background: transparent;
  }

  &:focus {
    outline: none;

    &:after {
      border-color: ${(props) => props.theme.accent};
    }
  }
`;

export { StyledIntroContainer, StyledLinkButton };

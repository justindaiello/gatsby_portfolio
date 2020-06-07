import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`;

const StyledImageGrid = styled.div`
  display: grid;
  max-width: 1200px;
  margin: 5rem auto;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8rem 0;
  background: ${(props) => props.theme.accent};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: ${(props) => props.theme.boxShadow};
  color: ${(props) => props.theme.text};
  position: relative;

  h2 {
    margin-top: 0;
    font-weight: 300;
    font-size: 2.2rem;
  }

  .divider {
    position: absolute;
    height: 90%;
    border-left: 1px solid ${(props) => props.theme.text};
    left: 46%;
    top: 5%;
  }

  .mobileDivider {
    display: none;
  }

  .info {
    text-align: left;

    p,
    ul {
      font-size: 1.65rem;
    }
  }

  .logos {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 3rem 2rem;
    align-self: center;

    img {
      justify-self: center;
    }

    img:first-of-type {
      grid-row: 1;
      grid-column: 2;
    }

    img:nth-of-type(2) {
      grid-row: 1;
      grid-column: 3;
      cursor: pointer;

      &:hover {
        animation: ${rotate} 2s linear infinite;
      }
    }

    img:nth-of-type(3) {
      grid-row: 2;
      grid-column: 1 / 3;
      cursor: pointer;

      &:hover {
        animation: ${rotate} 2s linear infinite;
      }
    }

    img:nth-of-type(4) {
      grid-row: 2;
      grid-column: 2 / 4;
    }

    img:nth-of-type(5) {
      grid-row: 2;
      grid-column: 3 / 5;
    }

    img:nth-of-type(6) {
      grid-row: 3;
      grid-column: 2;
    }

    img:last-of-type {
      grid-row: 3;
      grid-column: 3;
    }
  }

  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    padding-top: 4rem;

    div:nth-of-type(2) {
      grid-row: 3;
    }

    div:nth-of-type(3) {
      grid-row: 5;
    }

    .divider {
      display: none;
    }

    .mobileDivider {
      display: block;
      width: 100%;
      border: 0.5px solid ${(props) => props.theme.text};
    }

    .image {
      margin: 0 auto;
    }

    .logos,
    .info {
      max-width: 600px;
    }

    .logos {
      grid-gap: 2rem 4rem;
      margin: 0 auto 4rem;
    }

    .info {
      text-align: center;
      margin: 4rem auto 0;

      ul {
        display: inline-block;
        text-align: left;
      }
    }
  }

  @media (max-width: 450px) {
    max-width: 350px;

    .logos {
      grid-template-columns: repeat(2, 1fr);

      img:first-of-type {
        grid-column: 1;
      }

      img:nth-of-type(2) {
        grid-column: 2;
      }

      img:nth-of-type(3) {
        grid-column: 1;
      }

      img:nth-of-type(4) {
        grid-column: 2;
      }

      img:nth-of-type(5) {
        grid-row: 4;
        grid-column: 1;
      }

      img:nth-of-type(6) {
        grid-row: 4;
        grid-column: 2;
      }

      img:last-of-type {
        grid-row: 5;
        grid-column: 1 / 3;
      }
    }
  }
`;

const StyledLogo = styled.img`
  max-width: 100px;
  max-height: 100px;
`;

export { StyledImageGrid, StyledLogo };

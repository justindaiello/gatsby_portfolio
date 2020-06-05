import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`;

const StyledHeader = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  margin-top: 2rem;
  text-align: center;
  color: ${(props) => props.theme.text};
`;

const StyledImageGrid = styled.div`
  display: grid;
  max-width: 1200px;
  width: 100%;
  margin: 5rem auto;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8rem 0;

  .image {
    object-fit: contain;
    width: 100%;
    border-radius: 12px;
    align-self: center;
  }

  .logos {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 3rem 2rem;

    h2 {
      grid-row: 1;
      grid-column: 1 / 4;
      color: ${(props) => props.theme.text};
      font-weight: 300;
      font-size: 2rem;
      justify-self: center;
    }

    img {
      justify-self: center;
    }

    img:first-of-type {
      grid-row: 2;
      grid-column: 2;
    }

    img:nth-of-type(2) {
      grid-row: 2;
      grid-column: 3;
      cursor: pointer;

      &:hover {
        animation: ${rotate} 2s linear infinite;
      }
    }

    img:nth-of-type(3) {
      grid-row: 3;
      grid-column: 1 / 3;
      cursor: pointer;

      &:hover {
        animation: ${rotate} 2s linear infinite;
      }
    }

    img:nth-of-type(4) {
      grid-row: 3;
      grid-column: 2 / 4;
    }

    img:nth-of-type(5) {
      grid-row: 3;
      grid-column: 3 / 5;
    }

    img:nth-of-type(6) {
      grid-row: 4;
      grid-column: 2;
    }

    img:last-of-type {
      grid-row: 4;
      grid-column: 3;
    }
  }
`;

const StyledLogo = styled.img`
  max-width: 100px;
  max-height: 100px;
`;

export { StyledHeader, StyledImageGrid, StyledLogo };

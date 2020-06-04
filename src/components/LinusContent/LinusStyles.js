import styled from 'styled-components';

const StyledHeader = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  margin-top: 2rem;
  text-align: center;
  color: ${(props) => props.theme.text};
`;

const BuiltWithContainer = styled.div`
  display: grid;
  max-width: 1200px;
  width: 100%;
  margin: 5rem auto;
  grid-template-columns: repeat(2, 1fr);

  h2 {
    grid-column: 1 / 3;
    color: ${(props) => props.theme.text};
    font-weight: 300;
    font-size: 2rem;
  }

  .images {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;

    img:first-child {
      grid-row: 1;
      grid-column: 2;
      justify-self: center;
    }

    img:nth-of-type(2) {
      grid-row: 1;
      grid-column: 3;
      justify-self: center;
    }

    img:nth-of-type(3) {
      grid-row: 2;
      grid-column: 1 / 3;
      justify-self: center;
    }

    img:nth-of-type(4) {
      grid-row: 2;
      grid-column: 2 / 4;
      justify-self: center;
    }

    img:nth-of-type(5) {
      grid-row: 2;
      grid-column: 3 / 5;
      justify-self: center;
    }

    img:nth-of-type(6) {
      grid-row: 3;
      grid-column: 2;
      justify-self: center;
    }

    img:last-child {
      grid-row: 3;
      grid-column: 3;
      justify-self: center;
    }
  }
`;

const StyledLogo = styled.img`
  max-width: 100px;
  max-height: 100px;
`;

export { StyledHeader, BuiltWithContainer, StyledLogo };

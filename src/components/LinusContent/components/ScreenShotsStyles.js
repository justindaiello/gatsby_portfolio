import styled from 'styled-components';

const StyledImgContainer = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5rem 0;
  margin: 5rem auto;

  .appImage {
    border-radius: 12px;
    box-shadow: ${(props) => props.theme.boxShadow};
  }

  .appImageMobile {
    display: none;
  }

  @media (max-width: 999px) {
    grid-template-columns: repeat(2, 1fr);

    .appImage {
      display: none;
    }

    .appImageMobile {
      display: block;
      border-radius: 12px;
      box-shadow: ${(props) => props.theme.boxShadow};
    }

    .appImageMobile {
      justify-self: center;
      width: 375px;
      image-rendering: crisp-edges;
    }

    .appImageMobile:first-child,
    .appImageMobile:nth-of-type(2) {
      grid-row: 2;
    }

    .appImageMobile:last-child {
      grid-column: 1 / 3;
      justify-self: center;
    }
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;

    .appImageMobile:first-child {
      grid-row: 1;
    }

    .appImageMobile:last-child {
      grid-row: 3;
    }
  }
`;

export { StyledImgContainer };

import styled from 'styled-components';

const StyledImgContainer = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5rem 0;
  margin: 10rem auto;

  .appImage,
  .appImageMobile {
    border-radius: 12px;
    box-shadow: ${(props) => props.theme.boxShadow};
  }

  .appImageMobile {
    display: none !important;
  }

  @media (max-width: 999px) {
    grid-template-columns: repeat(2, 1fr);

    .appImage {
      display: none !important;
    }

    .appImageMobile {
      justify-self: center;
      width: 375px;
      display: inline-block !important;
    }

    .appImageMobile:last-child,
    .appImageMobile:first-child {
      grid-row: 1;
    }

    .appImageMobile:nth-of-type(2) {
      grid-column: 1 / 3;
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

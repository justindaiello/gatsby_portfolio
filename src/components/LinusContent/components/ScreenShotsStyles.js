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

    .appImageMobile:last-child {
      grid-column: 1 / 3;
      justify-self: center;
    }
  }

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2.5rem;

    .appImageMobile {
      margin: 2.5rem 0;
    }
  }
`;

export { StyledImgContainer };

import styled from 'styled-components';

const StyledChartWell = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 2rem;

  h1 {
    color: ${(props) => props.theme.text};
    margin: 0;
  }

  > h2 {
    color: ${(props) => props.theme.text};
    margin: 0 0 1rem;
    font-size: 1.5rem;
  }

  .homeLink {
    position: absolute;
    font-size: 1.5rem;
    left: 20px;
    top: 15px;
  }

  .chartButton {
    margin-bottom: 4rem;
  }

  .container {
    background: #fff;
    border-radius: 16px;
    padding: 4rem;
    margin-bottom: 6rem;
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: ${(props) => props.theme.boxShadow};
    position: relative;

    h2 {
      position: absolute;
      margin: 0;
      font-size: 2.5rem;
      top: 2rem;
    }
  }

  @media (max-width: 1440px) {
    margin-top: 5rem;
  }

  @media (max-width: 750px) {
    height: auto;

    > h2 {
      text-align: center;
    }

    .container > h2 {
      position: relative;
      margin-bottom: 1rem;
      top: 0;
    }

    .homeLink {
      left: 0;
    }
  }
`;

const StyledChartContainer = styled.div`
  width: 100%;

  .toolTip,
  .toolTipShort {
    border-left: 2px solid #111219;
    padding-left: 0.25rem;
    position: relative;
    transition: all 0.2s;
  }

  .toolTipYear {
    font-size: 1.2rem;
    color: #111219;
    margin: 0;
    position: absolute;
    right: 12px;
    top: -8px;
  }

  .toolTip {
    height: 310px;
  }

  .toolTipShort {
    height: 250px;
  }

  .emptyChartContainer {
    width: 100%;
    height: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 4rem 0;

    img {
      width: 160px;
      height: 120px;
      opacity: 0.15;
    }
  }

  @media (max-width: 750px) {
    .toolTipShort {
      height: 310px;
    }
  }
`;

const StyledChartFooter = styled.div`
  .xAxis {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;

    span {
      color: #111219;
      font-size: 1.6rem;
    }
  }

  .break {
    flex-basis: 100%;
    height: 0;
  }

  .infoContainer {
    margin: 2.5rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    .withDeposit,
    .traditionalSavings {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      color: #111219;
      font-size: 1.6rem;

      div:nth-of-type(1) {
        height: 14px;
        width: 14px;
        border-radius: 100%;
        margin-right: 0.35rem;
      }

      h5 {
        color: #111219;
        margin: 0 0.5rem 0;
        font-size: 2.5rem;
        font-weight: 700;
      }
    }

    .withDeposit > div {
      background: #ecbf5b;
    }

    .traditionalSavings > div {
      background: ${(props) => props.theme.accent};
    }
  }

  @media (max-width: 600px) {
    .infoContainer {
      grid-template-columns: 1fr;

      .withDeposit,
      .traditionalSavings {
        justify-content: flex-start;
      }
    }
  }
`;

const StyledFormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4rem;

  .formGroup > label {
    font-size: 1.6rem;
    color: #111219;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

export {
  StyledChartWell,
  StyledChartContainer,
  StyledChartFooter,
  StyledFormContainer,
};

import styled from 'styled-components';

const StyledChartWell = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h1 {
    color: ${(props) => props.theme.text};
  }

  .container {
    background: #fff;
    border-radius: 16px;
    padding: 6rem;
    margin-bottom: 6rem;
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: ${(props) => props.theme.boxShadow};
  }

  .inputs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StyledChartContainer = styled.div`
  width: 100%;

  .toolTip,
  .toolTipShort {
    border-left: 2px solid #333;
    padding-left: 0.25rem;
    position: relative;
    transition: all 0.2s;
  }

  .toolTipYear {
    font-size: 1.6rem;
    color: #333;
    opacity: 0.68;
    margin: 0;
    position: absolute;
    right: 12px;
    top: -3px;
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
    margin-bottom: 8rem;

    img {
      width: 160px;
      height: 120px;
      opacity: 0.15;
    }
  }
`;

const StyledChartFooter = styled.div`
  .xAxis {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;

    span {
      color: #333;
      opacity: 0.68;
      font-size: 1.6rem;
    }
  }

  .break {
    flex-basis: 100%;
    height: 0;
  }

  .infoContainer {
    margin: 2.5rem 0;
    display: flex;
    justify-content: center;

    .withDeposit,
    .currentContributions,
    .traditionalSavings {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      color: rgba(51, 51, 51, 0.68);
      font-size: 1.6rem;

      div:nth-of-type(1) {
        height: 14px;
        width: 14px;
        border-radius: 100%;
        margin-right: 0.35rem;
      }

      h5 {
        color: #333;
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
`;

export { StyledChartWell, StyledChartContainer, StyledChartFooter };

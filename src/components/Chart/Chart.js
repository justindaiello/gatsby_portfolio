import React from 'react';

import {
  formatCurrency,
  calculateWithDeposit,
  calculateWithHighYieldRate,
} from '../../utils/functions';
import ChartUI from './components/ChartUI';
import { useImmer } from '../../utils/hooks';
import { StyledChartWell } from './ChartStyles';
import ChartForm from './components/ChartForm';
import ChartFooter from './components/ChartFooter';

//this is normally fetched from the BE and put into the redux store
const liveBalance = 0;

//this normally comes from a drop down select for recurring deposit frequency
const depositFrequency = 'One-time';

//hard coded value for the number of years displayed on the chart
const NUM_OF_YEARS = 30;

function Chart() {
  const [amount, setAmount] = React.useState('$500.00');
  const [currentRate, setCurrentRate] = React.useState(300);
  const [currentValue, setCurrentValue] = useImmer({
    currentDeposit: null,
    currentHighYield: null,
  });
  const [values, setValues] = useImmer({
    depositValues: null,
    highYieldValues: null,
  });
  let date = new Date().getFullYear();
  let zeroDataMessage =
    (!amount && liveBalance === 0) || (amount === '$0.00' && liveBalance === 0);

  //run real time calculations on the amount and rate inputs with a value vs without a value and pipe the values into state
  React.useEffect(() => {
    amount
      ? setValues((draft) => {
          draft.depositValues = formatCurrency(
            calculateWithDeposit(
              amount,
              liveBalance,
              currentRate,
              0,
              parseDepositFrequency(depositFrequency),
            ),
          );
          draft.highYieldValues = formatCurrency(
            calculateWithHighYieldRate(
              liveBalance,
              0,
              amount,
              parseDepositFrequency(depositFrequency),
            ),
          );
        })
      : setValues((draft) => {
          draft.depositValues = formatCurrency(
            calculateWithDeposit(
              0,
              liveBalance,
              currentRate,
              0,
              parseDepositFrequency(depositFrequency),
            ),
          );
          draft.highYieldValues = formatCurrency(
            calculateWithHighYieldRate(
              liveBalance,
              0,
              0,
              parseDepositFrequency(depositFrequency),
            ),
          );
        });
  }, [amount, setValues, currentRate]);

  //this would take the strings from the recurring deposit dropdown (not being used in this example) and parse them into numbers
  function parseDepositFrequency(depositFrequency) {
    switch (depositFrequency) {
      case 'One-time': {
        return 1;
      }
      case 'Quarterly': {
        return 4;
      }
      case 'Monthly': {
        return 12;
      }
      case 'Weekly': {
        return 52;
      }
      default: {
        return 1;
      }
    }
  }

  //calculate deposit date for the chart
  function depositData() {
    let data = [];
    for (let i = 0; i <= NUM_OF_YEARS; i++) {
      data.push({
        x: i,
        y: calculateWithDeposit(
          amount,
          liveBalance,
          currentRate,
          i,
          parseDepositFrequency(depositFrequency),
        ),
        z: date++,
      });
    }
    return data;
  }

  //calculate high yield account data for the chart
  function highYieldData() {
    let data = [];
    for (let i = 0; i <= NUM_OF_YEARS; i++) {
      data.push({
        x: i,
        y: calculateWithHighYieldRate(
          liveBalance,
          i,
          amount,
          parseDepositFrequency(depositFrequency),
        ),
      });
    }
    return data;
  }

  //set the yearly values for the deposit chart hover
  function handleDepositMouseOver(data) {
    setCurrentValue((draft) => {
      draft.currentDeposit = data;
    });
    currentValue.currentDeposit &&
      setValues((draft) => {
        draft.depositValues = formatCurrency(currentValue.currentDeposit.y);
      });
  }

  //set the yearly values for the highyield chart hover
  function handleHighYieldMouseOver(data) {
    setCurrentValue((draft) => {
      draft.currentHighYield = data;
    });
    currentValue.currentHighYield &&
      setValues((draft) => {
        draft.highYieldValues = formatCurrency(currentValue.currentHighYield.y);
      });
  }

  //reset all values based on the input value when the user leaves the chart area
  function resetValues() {
    setCurrentValue((draft) => {
      draft.currentDeposit = null;
      draft.currentHighYield = null;
    });
    setValues((draft) => {
      draft.depositValues = formatCurrency(
        calculateWithDeposit(
          amount,
          liveBalance,
          currentRate,
          0,
          parseDepositFrequency(depositFrequency),
        ),
      );
      draft.highYieldValues = formatCurrency(
        calculateWithHighYieldRate(
          liveBalance,
          0,
          amount,
          parseDepositFrequency(depositFrequency),
        ),
      );
    });
  }

  //handle the amount input state
  function handleAmount(e) {
    setAmount(e.target.value);
  }

  //handle the select input state
  function handleRateChange(e) {
    setCurrentRate(e.name);
  }

  return (
    <StyledChartWell>
      <h1>APY Chart</h1>
      <div className="container">
        <h2>Predicted Growth</h2>
        <ChartUI
          amount={amount}
          resetValues={resetValues}
          currentValue={currentValue}
          depositData={depositData()}
          highYieldData={highYieldData()}
          zeroDataMessage={zeroDataMessage}
          handleDepositMouseOver={handleDepositMouseOver}
          handleHighYieldMouseOver={handleHighYieldMouseOver}
        />
        <ChartFooter values={values} currentRate={currentRate} />
        <ChartForm
          amount={amount}
          currentRate={currentRate}
          handleAmount={handleAmount}
          handleRateChange={handleRateChange}
        />
      </div>
    </StyledChartWell>
  );
}

export default Chart;

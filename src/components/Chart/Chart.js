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

const liveBalance = 0;
const NUM_OF_YEARS = 30;
const depositFrequency = 'One-time';

function Chart() {
  let date = new Date().getFullYear();
  const [amount, setAmount] = React.useState('$500.00');
  const [currentRate, setCurrentRate] = React.useState(400);
  const [currentValue, setCurrentValue] = useImmer({
    currentDeposit: null,
    currentHighYield: null,
  });
  const [values, setValues] = useImmer({
    depositValues: null,
    highYieldValues: null,
  });
  let zeroDataMessage =
    (!amount && liveBalance === 0) || (amount === '$0.00' && liveBalance === 0);

  React.useEffect(() => {
    amount
      ? setValues((draft) => {
          draft.depositValues = formatCurrency(
            calculateWithDeposit(
              amount,
              liveBalance,
              currentRate,
              NUM_OF_YEARS,
              parseDepositFrequency(depositFrequency),
            ),
          );
          draft.highYieldValues = formatCurrency(
            calculateWithHighYieldRate(
              liveBalance,
              NUM_OF_YEARS,
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
              NUM_OF_YEARS,
              parseDepositFrequency(depositFrequency),
            ),
          );
          draft.highYieldValues = formatCurrency(
            calculateWithHighYieldRate(
              liveBalance,
              NUM_OF_YEARS,
              0,
              parseDepositFrequency(depositFrequency),
            ),
          );
        });
  }, [amount, setValues, currentRate]);

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

  function handleDepositMouseOver(data) {
    setCurrentValue((draft) => {
      draft.currentDeposit = data;
    });
    currentValue.currentDeposit &&
      setValues((draft) => {
        draft.depositValues = formatCurrency(currentValue.currentDeposit.y);
      });
  }

  function handleHighYieldMouseOver(data) {
    setCurrentValue((draft) => {
      draft.currentHighYield = data;
    });
    currentValue.currentHighYield &&
      setValues((draft) => {
        draft.highYieldValues = formatCurrency(currentValue.currentHighYield.y);
      });
  }

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
          NUM_OF_YEARS,
          parseDepositFrequency(depositFrequency),
        ),
      );
      draft.highYieldValues = formatCurrency(
        calculateWithHighYieldRate(
          liveBalance,
          NUM_OF_YEARS,
          amount,
          parseDepositFrequency(depositFrequency),
        ),
      );
    });
  }

  function handleAmount(e) {
    setAmount(e.target.value);
  }

  function handleRateChange(e) {
    setCurrentRate(e.name);
  }

  return (
    <StyledChartWell>
      <h1>Deposit Chart</h1>
      <div className="container">
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
        <ChartFooter values={values} />
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

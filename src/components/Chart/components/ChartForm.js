import React from 'react';
import { string, number, func } from 'prop-types';

import SelectInput from '../../SelectInput';
import CurrencyInput from '../../CurrencyInput';
import { StyledFormContainer } from '../ChartStyles';
import { formatRate, parseRate } from '../../../utils/functions';

const propTypes = {
  amount: string,
  currentRate: number,
  handleAmount: func,
  handleRateChange: func,
};

let rates = [{ name: 300 }, { name: 500 }, { name: 700 }];

function ChartForm({ amount, handleAmount, handleRateChange, currentRate }) {
  let selectedRate = rates.find((option) => option.name === currentRate);
  return (
    <StyledFormContainer>
      <div className="formGroup">
        <label htmlFor="amount">Amount</label>
        <CurrencyInput
          name="amount"
          value={amount}
          onChange={handleAmount}
          label="Amount"
          placeholder="Enter an amount"
          maxLength={10}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="rateOptions">APY Rate</label>
        <SelectInput
          id="rateOptions"
          placeholder="Select rate"
          onChange={handleRateChange}
          options={rates}
          value={selectedRate}
          getOptionLabel={(option) => formatRate(parseRate(option.name))}
          getOptionValue={(option) => option.name}
        />
      </div>
    </StyledFormContainer>
  );
}

ChartForm.propTypes = propTypes;

export default ChartForm;

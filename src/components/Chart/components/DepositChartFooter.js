import React from 'react';
import { object } from 'prop-types';

import { StyledChartFooter } from '../ChartStyles';

function DepositChartDetails({ values }) {
  return (
    <StyledChartFooter>
      <div className="xAxis">
        <span>0 yrs</span>
        <span>15 yrs</span>
        <span>30 yrs</span>
      </div>
      <div className="infoContainer">
        <div className="withDeposit">
          <div />
          With Deposit
          <div className="break" />
          <h5>{values.depositValues}</h5>
        </div>
        <div className="traditionalSavings">
          <div />
          Vs. Traditional Savings
          <div className="break" />
          <h5 As="h5" size="small">
            {values.highYieldValues}
          </h5>
        </div>
      </div>
    </StyledChartFooter>
  );
}

DepositChartDetails.propTypes = {
  values: object,
};

export default DepositChartDetails;

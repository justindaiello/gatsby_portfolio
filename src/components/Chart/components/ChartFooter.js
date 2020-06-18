import React from 'react';
import { object } from 'prop-types';

import { StyledChartFooter } from '../ChartStyles';

function ChartDetails({ values }) {
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
          <h5>{values.highYieldValues}</h5>
        </div>
      </div>
    </StyledChartFooter>
  );
}

ChartDetails.propTypes = {
  values: object,
};

export default ChartDetails;

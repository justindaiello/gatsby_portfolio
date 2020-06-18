import React from 'react';
import { object, number } from 'prop-types';

import { StyledChartFooter } from '../ChartStyles';
import { formatRate, parseRate } from '../../../utils/functions';

const propTypes = {
  values: object,
  currentRate: number,
};

function ChartDetails({ values, currentRate }) {
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
          {`Current Amount (${formatRate(parseRate(currentRate))})`}
          <div className="break" />
          <h5>{values.depositValues}</h5>
        </div>
        <div className="traditionalSavings">
          <div />
          Vs. Traditional Savings (1.70%)
          <div className="break" />
          <h5>{values.highYieldValues}</h5>
        </div>
      </div>
    </StyledChartFooter>
  );
}

ChartDetails.propTypes = propTypes;

export default ChartDetails;

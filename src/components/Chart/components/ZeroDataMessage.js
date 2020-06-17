import React from 'react';

import EmptyDepositChart from '../../../images/EmptyDepositChart.png';

function ZeroDataMessage() {
  return (
    <div className="emptyChartContainer">
      <img src={EmptyDepositChart} alt="Empty Chart" />
    </div>
  );
}

export default ZeroDataMessage;

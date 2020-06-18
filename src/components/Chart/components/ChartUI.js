import React from 'react';
import { func, object, array, bool } from 'prop-types';
import {
  AreaSeries,
  XYPlot,
  makeWidthFlexible,
  Hint,
  GradientDefs,
} from 'react-vis';

import { StyledChartContainer } from '../ChartStyles';
import ZeroDataMessage from './ZeroDataMessage';
import '../../../../node_modules/react-vis/dist/style.css';

let FlexibleXYPlot = makeWidthFlexible(XYPlot);

const propTypes = {
  depositData: array,
  highYieldData: array,
  currentValue: object,
  handleDepositMouseOver: func,
  handleHighYieldMouseOver: func,
  resetValues: func,
  zeroDataMessage: bool,
};

function ChartUI({
  depositData,
  highYieldData,
  currentValue,
  handleDepositMouseOver,
  handleHighYieldMouseOver,
  resetValues,
  zeroDataMessage,
}) {
  if (zeroDataMessage) {
    return (
      <StyledChartContainer>
        <ZeroDataMessage />
      </StyledChartContainer>
    );
  }

  return (
    <StyledChartContainer>
      <div>
        <FlexibleXYPlot
          height={300}
          margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
          onMouseLeave={resetValues}
        >
          <GradientDefs>
            <linearGradient id="yellowGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="50%" stopColor="#ECBF5B" stopOpacity={1} />
              <stop offset="100%" stopColor="#ECBF5B" stopOpacity={0.5} />
            </linearGradient>
            <linearGradient id="blueGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="50%" stopColor="#87B3C7" stopOpacity={1} />
              <stop offset="100%" stopColor="#87B3C7" stopOpacity={0.5} />
            </linearGradient>
          </GradientDefs>
          {currentValue.currentDeposit && (
            <Hint
              value={currentValue.currentDeposit}
              align={{ vertical: 'bottomEdge' }}
            >
              <div
                className={
                  !currentValue.currentDeposit.z &&
                  currentValue.currentDeposit.z < 2030
                    ? 'toolTipShort'
                    : 'toolTip'
                }
              >
                <span className="toolTipYear">
                  {currentValue.currentDeposit?.z}
                </span>
              </div>
            </Hint>
          )}
          <AreaSeries
            curve="curveNatural"
            color={'url(#yellowGradient)'}
            data={depositData}
            onNearestX={(data) => handleDepositMouseOver(data)}
          />
          <AreaSeries
            curve="curveNatural"
            color={'url(#blueGradient)'}
            data={highYieldData}
            onNearestX={(data) => handleHighYieldMouseOver(data)}
          />
        </FlexibleXYPlot>
      </div>
    </StyledChartContainer>
  );
}

ChartUI.propTypes = propTypes;

export default ChartUI;

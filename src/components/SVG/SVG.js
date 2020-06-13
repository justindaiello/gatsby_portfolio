import React from 'react';
import { string, object, bool } from 'prop-types';

import { StyledSvg } from './SVGStyles';

const propTypes = {
  top: string,
  left: string,
  width: string,
  color: string,
  isHidden: bool,
  isMobile: bool,
  height: string,
  viewBox: string,
  children: object,
  animation: string,
};

function SVG({
  top,
  left,
  width,
  color,
  height,
  viewBox,
  isMobile,
  children,
  isHidden,
  animation,
}) {
  return (
    <StyledSvg
      top={top}
      role="img"
      left={left}
      color={color}
      width={width}
      height={height}
      viewBox={viewBox}
      isMobile={isMobile}
      isHidden={isHidden}
      animation={animation}
    >
      {children}
    </StyledSvg>
  );
}

SVG.propTypes = propTypes;

export default SVG;

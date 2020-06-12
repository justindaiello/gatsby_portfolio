import React from 'react';

import { StyledSvg } from './SVGStyles';

function SVG({
  color,
  top,
  left,
  width,
  children,
  viewBox,
  isHidden,
  long,
  height,
}) {
  return (
    <StyledSvg
      top={top}
      long={long}
      left={left}
      color={color}
      width={width}
      height={height}
      viewBox={viewBox}
      isHidden={isHidden}
    >
      {children}
    </StyledSvg>
  );
}

export default SVG;

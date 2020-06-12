import React from 'react';

export const Triangle = () => (
  <polygon
    strokeWidth="1.5px"
    strokeLinejoin="round"
    strokeMiterlimit="10"
    points="14.921,2.27 28.667,25.5 1.175,25.5"
  />
);

export const Circle = ({ r, cx, cy }) => (
  <circle cx={cx} cy={cy} r={r} fill="#none" stroke-width="0.5" />
);

export const Square = () => (
  <rect
    x="10"
    y="10"
    ry="2"
    width="30"
    height="30"
    fill="transparent"
    stroke-width="1"
  />
);

export const HarryPotter = () => (
  <polyline
    points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
    fill="transparent"
    stroke-width="1"
  />
);

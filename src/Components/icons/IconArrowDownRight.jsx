import React from 'react';

const IconArrowDownRight = ({ size = 24, color = 'currentColor', style = {} }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    aria-hidden="true"
    focusable="false"
  >
    <path d="M7 7l10 10" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M9 17h8V9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default IconArrowDownRight;

import React from 'react';

const IconStar = ({ size = 24, color = 'currentColor', style = {} }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    style={style}
  >
    <path d="M12 2l2.937 5.952 6.563.954-4.75 4.633 1.121 6.535L12 17.77l-5.871 3.304 1.121-6.535-4.75-4.633 6.563-.954L12 2z" />
  </svg>
);

export default IconStar;

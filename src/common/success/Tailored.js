'use client'
import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={183}
    height={183}
    viewBox='0 0 183 183'
    fill='none'
    {...props}
  >
    <g filter='url(#filter0_d_16_118)'>
      <circle cx={91.5} cy={85.5} r={61.5} fill='#009CD5' />
    </g>
    <path
      d='M112.28 94.4437L99.8033 106.943C99.597 107.148 99.3523 107.309 99.0832 107.419C98.8141 107.529 98.526 107.585 98.2354 107.583H91.9858C91.4001 107.583 90.8384 107.351 90.4243 106.936C90.0102 106.522 89.7775 105.961 89.7775 105.375V99.1254C89.7856 98.5407 90.0144 97.9807 90.4179 97.5575L102.917 85.0804C103.327 84.6697 103.814 84.344 104.351 84.1217C104.887 83.8994 105.461 83.785 106.042 83.785C106.622 83.785 107.197 83.8994 107.733 84.1217C108.269 84.344 108.756 84.6697 109.167 85.0804L112.28 88.1941C112.691 88.6043 113.017 89.0914 113.239 89.6276C113.461 90.1638 113.576 90.7385 113.576 91.3189C113.576 91.8993 113.461 92.4741 113.239 93.0102C113.017 93.5464 112.691 94.0335 112.28 94.4437ZM109.167 70.0416H93.3329L87.9887 64.7195C87.1643 63.8901 86.0445 63.4216 84.875 63.4166H73.8333C72.662 63.4166 71.5386 63.882 70.7103 64.7102C69.882 65.5385 69.4167 66.6619 69.4167 67.8333V96.5416C69.4167 97.713 69.882 98.8364 70.7103 99.6647C71.5386 100.493 72.662 100.958 73.8333 100.958H85.3608V99.1254C85.3624 97.3689 86.0614 95.6849 87.3042 94.4437L99.8033 81.9445C100.624 81.1233 101.598 80.4717 102.67 80.0272C103.743 79.5827 104.892 79.3538 106.053 79.3538C107.214 79.3538 108.363 79.5827 109.436 80.0272C110.508 80.4717 111.482 81.1233 112.302 81.9445L113.583 83.2916V74.4583C113.583 73.2869 113.118 72.1635 112.29 71.3352C111.461 70.507 110.338 70.0416 109.167 70.0416Z'
      fill='#FAFAFA'
    />
    <defs>
      <filter
        id='filter0_d_16_118'
        x={0}
        y={0}
        width={183}
        height={183}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={6} />
        <feGaussianBlur stdDeviation={15} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0.180392 0 0 0 0 0.235294 0 0 0 0 1 0 0 0 0.45 0'
        />
        <feBlend
          mode='normal'
          in2='BackgroundImageFix'
          result='effect1_dropShadow_16_118'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect1_dropShadow_16_118'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
);
export default SVGComponent;
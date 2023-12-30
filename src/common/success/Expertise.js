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
    <g filter='url(#filter0_d_16_114)'>
      <circle cx={91.5} cy={85.5} r={61.5} fill='#01D0A2' />
    </g>
    <path
      d='M91.6423 61.1027C90.2534 61.1027 88.9437 61.8982 87.9222 63.3541C86.9007 64.81 86.2304 66.9014 86.2304 69.2286C86.2304 71.5557 86.9007 73.644 87.9223 75.0998C88.9438 76.5559 90.2535 77.3513 91.6423 77.3513C93.0313 77.3513 94.3377 76.5559 95.3592 75.0998C96.3809 73.6441 97.0543 71.5559 97.0543 69.2286C97.0543 66.9016 96.3809 64.8101 95.3593 63.3541C94.3379 61.8983 93.0315 61.1027 91.6425 61.1027H91.6423ZM76.0891 65.5603C73.9872 65.6197 73.6052 66.9983 72.7994 68.5653C70.3877 73.255 67.0476 85.6195 67.0476 85.6195L83.6588 85.0568L86.6737 99.2998L84.3156 110.276H99.7491L97.4425 99.3029L99.9528 85.0695L116.26 85.6195C116.26 85.6195 112.92 73.2549 110.508 68.5653C109.702 66.9981 109.32 65.6196 107.218 65.5603C105.366 65.5603 103.864 67.1701 103.864 69.1541C103.864 71.1381 105.366 72.7482 107.218 72.7482C107.604 72.7482 107.97 72.6567 108.315 72.5281L109.137 80.2303L97.0316 76.08C97.0021 76.1235 96.9744 76.1698 96.9443 76.2125C95.657 78.0472 93.7763 79.2859 91.6422 79.2859C89.5084 79.2859 87.6277 78.0472 86.3404 76.2125C86.3117 76.1716 86.2845 76.1281 86.2563 76.0864L74.1709 80.2304L74.9925 72.5282C75.3379 72.6568 75.7033 72.7482 76.0892 72.7482C77.9419 72.7482 79.4437 71.1382 79.4437 69.1541C79.4437 67.1702 77.942 65.5603 76.0893 65.5603H76.0891Z'
      fill='#FAFAFA'
    />
    <defs>
      <filter
        id='filter0_d_16_114'
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
          result='effect1_dropShadow_16_114'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect1_dropShadow_16_114'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
);
export default SVGComponent;

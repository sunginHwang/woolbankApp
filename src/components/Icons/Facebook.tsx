import { FC } from 'react';
import { IconProps } from '.';

export const Facebook: FC<IconProps> = ({ width = 24, height = 24, fill = 'currentColor' }) => {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <mask id="facebook" width="12" height="20" x="4" y="0" maskUnits="userSpaceOnUse">
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M7.84 20v-8.945H4.844V7.5H7.84V4.7C7.84 1.655 9.7 0 12.414 0c1.3 0 2.418.098 2.742.14v3.18h-1.883c-1.476 0-1.761.703-1.761 1.73V7.5h3.332l-.457 3.555h-2.875V20"
          clipRule="evenodd"
        />
      </mask>
      <g mask="url(#facebook)">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </g>
    </svg>
  );
};

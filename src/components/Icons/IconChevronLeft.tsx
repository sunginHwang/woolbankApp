import { FC } from 'react';
import { IconProps } from '.';
import Svg, { Path } from 'react-native-svg';

export const IconChevronLeft: FC<IconProps> = ({ width = 24, height = 24, fill = 'currentColor' }) => {
  return (
    <Svg  width={width} height={height} viewBox="0 0 24 24">
      <Path fill={fill} d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
    </Svg>
  );
};


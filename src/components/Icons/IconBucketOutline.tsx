import { FC } from 'react';
import { IconProps } from '.';
import Svg, { Path } from 'react-native-svg';

export const IconBucketOutline: FC<IconProps> = ({ width = 24, height = 24, fill = 'currentColor' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path fill={fill} d="M3 4H21V7H20L17.5 21H6.5L4 7H3V4M17.97 7H6.03L8.15 19H15.85L17.97 7Z" />
    </Svg>
  );
};

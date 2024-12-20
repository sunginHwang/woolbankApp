import { FC } from 'react';
import { IconProps } from '.';
import Svg, { Path } from 'react-native-svg';

export const IconPigOutline: FC<IconProps> = ({ width = 24, height = 24, fill = 'currentColor' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        fill={fill}
        d="M9 12C8.4 12 8 11.6 8 11S8.4 10 9 10 10 10.4 10 11 9.6 12 9 12M22 12H20C20 8.7 16.4 6 12 6C11.2 6 10.3 6.1 9.6 6.3L7 5V7.3C5.5 8.2 4.5 9.5 4.1 11H2V15H5.1C5.6 15.6 6.2 16.2 7 16.7V20H9V17.6C9.9 17.9 10.9 18 12 18S14.1 17.8 15 17.6V20H17V16.7C18.1 16 19 15.1 19.5 14H22V12M12 16C8.7 16 6 14.2 6 12S8.7 8 12 8 18 9.8 18 12 15.3 16 12 16Z"
      />
    </Svg>
  );
};

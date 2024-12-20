import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '.';
import { View } from 'react-native';

export const IconAccountOutline: FC<IconProps> = ({ width = 24, height = 24, fill = '#f03e3e' }) => {
  return (
    <View>
      <Svg width={width} height={height} viewBox="0 0 24 24">
        <Path
          fill={fill}
          d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z"
        />
      </Svg>
    </View>
  );
};

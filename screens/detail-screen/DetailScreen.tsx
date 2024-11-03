import { FC } from 'react';
import { Text, View } from 'react-native';

type TabParamList = {
  '가계부 통계': undefined;
  // 다른 탭 스크린들 추가
};

type Props = any;

export const DetailsScreen: FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        onPress={() => {
          navigation.push('WebView', {
            title: '신규웹뷰1',
          });
        }}
      >
        <Text>가계부홈 Screen</Text>
      </Text>
    </View>
  );
};

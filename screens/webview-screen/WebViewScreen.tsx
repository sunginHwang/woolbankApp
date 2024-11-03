import { FC } from 'react';
import { Text, View } from 'react-native';

export const WebViewScreen: FC<any> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        onPress={() => {
          navigation.push('WebView', {
            title: '신규웹뷰2',
          });
        }}
      >
        webview Screen
      </Text>
    </View>
  );
};

import { BaseText } from '@components/base-text/BaseText';
import axios from 'axios';
import { FC, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

type TabParamList = {
  '가계부 통계': undefined;
  // 다른 탭 스크린들 추가
};

type Props = any;

export const DetailsScreen: FC<Props> = ({ navigation }) => {
  const [logText, setLogText] = useState('none');

const loginClick = async () => {
  const data = await axios.post('https://bank-api.woolta.com/user/share-code-login', {
    shareCode: '',
  })
  setLogText(JSON.stringify(data));
}

const dataCheck = async () => {
  setLogText('데이터확인');
  try {
    const res = await axios.get(`https://bank-api.woolta.com/account-books?dateTime=${new Date()}`);
    setLogText('>???');
    setLogText(JSON.stringify(res));
    console.log(res);
  } catch(e) {
    setLogText('에러남');
    setLogText(JSON.stringify(e));
  }
}

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <BaseText onPress={loginClick} kind='title1Bold' color='gray600' mb={20}>로그인체크</BaseText>
         <BaseText onPress={dataCheck} kind='title1Bold' color='gray600' mb={20}>데이터확인</BaseText>
       <View style={S.container}>
        <BaseText  kind='title1Bold' color='gray600' mb={20}>{logText}</BaseText>
       </View>

      <BaseText onPress={loginClick} kind='title1Bold' color='gray600' mb={20}>할로우</BaseText>
      <Text
        onPress={() => {
          navigation.push('WebView', {
            title: '신규웹뷰1',
          });
        }}
      >
        <Text>가계부홈 Screen</Text>
      </Text>
      <Text
        onPress={() => {
          navigation.push('simpleBrowser', {
            title: '신규웹뷰1',
            link: 'https://m.avalon.co.kr/check.html',
          });
        }}
      >
        <Text>simple_brouser Screen</Text>
      </Text>
    </View>
  );
};


const S = StyleSheet.create({
  container: {
    width: '100%',
    height:300,
    overflow: 'scroll',
  },
});

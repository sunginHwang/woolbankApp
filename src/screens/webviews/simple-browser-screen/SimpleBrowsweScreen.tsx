import { FC } from 'react';
import { Alert, Dimensions, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const SimpleBrowsweScreen: FC<any> = ({ navigation, route }) => {
  const { link } = route.params;
  const showAlert = () => {
    Alert.alert('Hello from React Native!', 'This alert was triggered from WebView');
  };
  const handleMessage = (event: any) => {
    const {name, data} = JSON.parse(event.nativeEvent.data);
    
    switch(name) {
      case 'showAlert':
        showAlert();
        break;
      case 'simpleBrowser':
        navigation.push('simpleBrowser', {
          title: data.title,
          link: data.link,
        });
        break;
      default:
        console.log('Received message:', name, data);
    }
  };
  const is_call_main_tab = link === 'https://m.avalon.co.kr/check.html';
  const source = is_call_main_tab ? { html: html } : { uri: link } ;

  return (
    <SafeAreaView style={styles.container}>
      <WebView
          style={styles.webview}
          source={source}
          injectedJavaScript={injectedJavaScript}    
              onMessage={handleMessage}
      />
    </SafeAreaView>
  );
};



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    webview: {
      flex: 1,
      width: windowWidth,
      height: windowHeight,
    },
    text: {
      color: 'white',
    },
  });
  


  const html = `
            <!DOCTYPE html>
            <html>
            <body>
              <h1>Hello from Web!</h1>
              <button id="sendToRN">Send Message to React Native</button>
            </body>
            </html>
          `;


  const injectedJavaScript = `
    // 웹 페이지에서 버튼 클릭 시 React Native에 메시지 보내기
    document.getElementById('sendToRN').addEventListener('click', function() {
      const webViewInterface = JSON.stringify({
        name: 'simpleBrowser',
        data: {
          title: '네이버',
          link: 'https://naver.com',
        },
      });
      window.ReactNativeWebView.postMessage(webViewInterface);
    });
    true; // 이 줄은 JavaScript가 WebView에서 실행되고 종료되도록 필요합니다.
  `;

import React, { useEffect, useState } from 'react';
import { Dimensions, Platform, SafeAreaView, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';
import { getUserAgent } from 'react-native-device-info';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Webview = () => {
  const [userAgent, setUserAgent] = useState('');

  useEffect(() => {
    const fetchUserAgent = async () => {
      let defaultUserAgent = await getUserAgent();
      setUserAgent(`${defaultUserAgent} woolbankApp1.0.0`);
    };

    fetchUserAgent();
  }, []);

  if (userAgent === '') {
    return null;
  }

  
  return (
    <SafeAreaView style={styles.container}>
      <WebView 
      style={styles.webview} 
      source={{ uri: 'https://m.avalon.co.kr/check.html' }} 
              userAgent={userAgent}
 />
    </SafeAreaView>
  );
};

export default Webview;

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

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { setCustomText } from 'react-native-global-props'; // 적용

import {
  useColorScheme
} from 'react-native';
import { StackNavigation } from './src/navigations/stack-nagivation/StackNagivation';



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  setCustomText(customTextProps);



  return (
    <NavigationContainer independent={true}>
      <StackNavigation/>
    </NavigationContainer>
  );
}

const customTextProps = {
  style: {
    fontFamily: 'Pretendard',
  },
};

export default App;

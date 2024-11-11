import { IconChevronLeft } from '@components/Icons/IconChevronLeft';
import { MainTabNavigation } from '@navigations/main-tab-navigation/MainTabNatigation';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WebViewScreen } from '@screens/webview-screen/WebViewScreen';
import { SimpleBrowsweScreen } from '@screens/webviews/simple-browser-screen/SimpleBrowsweScreen';
import { Pressable, Text } from 'react-native';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  const navigation = useNavigation();
  
  return (
    <Stack.Navigator screenOptions={() => ({ headerShown: false })} initialRouteName="MainTab">
      <Stack.Screen name="MainTab" component={MainTabNavigation} />
      <Stack.Screen
        name="WebView"
        component={WebViewScreen}
        options={({ route }) => ({
          headerShown: true,
          title: (route.params as any).title || 'Default Title',
        })}
      />
      <Stack.Screen
        name="simpleBrowser"
        component={SimpleBrowsweScreen}
        options={({ route }) => ({
          headerShown: true,
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <IconChevronLeft width={26} height={26} fill='#E62F71' />
            </Pressable>
          ),
          title: (route.params as any).title || 'Default Title',
          headerTitleStyle: {
            fontSize: 16,
            lineHeight: 22.4,
            fontWeight: '600',
            color: 'black',
          },
        })}
      />
    </Stack.Navigator>
  );
};

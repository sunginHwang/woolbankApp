import { MainTabNavigation } from '@navigations/main-tab-navigation/MainTabNatigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WebViewScreen } from '@screens/webview-screen/WebViewScreen';
import { SimpleBrowsweScreen } from '@screens/webviews/simple-browser-screen/SimpleBrowsweScreen';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
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
          title: (route.params as any).title || 'Default Title',
        })}
      />
    </Stack.Navigator>
  );
};

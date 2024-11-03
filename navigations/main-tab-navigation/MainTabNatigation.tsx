
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DetailsScreen } from '../../screens/detail-screen/DetailScreen';
import { IconPigOutline } from 'components/Icons/IconPigOutline';
import { IconWalletOutline } from 'components/Icons/WalletOutline';
import { IconAccountOutline } from 'components/Icons/IconAccountOutline';
import { IconBucketOutline } from 'components/Icons/IconBucketOutline';


const SCREEN_OPTIONS = {
  tabBarActiveTintColor: '#f03e3e',
  tabBarInactiveTintColor: '#E1E1E1',
  tabBarLabelStyle: {
    fontSize: 12, 
    marginTop: -4, 
    fontFamily: 'Pretendard-Regular', 
  },
}

const Tab = createBottomTabNavigator();

export const MainTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={SCREEN_OPTIONS}>
      <Tab.Screen 
        name='가계부' 
        component={DetailsScreen} 
        options={
          { tabBarIcon: ({color}) => (<IconPigOutline fill={color}/>)}}
      />
      <Tab.Screen 
        name='정기지출' 
        component={DetailsScreen} 
        options={
          { tabBarIcon: ({color}) => (<IconWalletOutline fill={color}/>)}}
      />
        <Tab.Screen 
        name='가계부 통계' 
        component={DetailsScreen} 
        options={
          { tabBarIcon: ({color}) => (<IconAccountOutline fill={color}/>)}}
      />
        <Tab.Screen 
        name='버킷리스트' 
        component={DetailsScreen} 
        options={
          { tabBarIcon: ({color}) => (<IconBucketOutline fill={color}/>)}}
      />
        <Tab.Screen 
        name='내 정보' 
        component={DetailsScreen} 
        options={
          { tabBarIcon: ({color}) => (<IconAccountOutline fill={color}/>)}}
      />
    </Tab.Navigator>
  );
}
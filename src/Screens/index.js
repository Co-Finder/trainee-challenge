import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './Home/HomeScreen';
import Notifications from './Notifications';
import Profile from './Profile/Profile';


const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#1FCC79', headerShown: false }}>
      <Tab.Screen name="Feed" component={HomeScreen} options={{ tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => ( 
        <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Notifications" component={Notifications} options={{ tabBarLabel: 'Notification', tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Profile" component={Profile} options={{ tabBarLabel: 'Profile', tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

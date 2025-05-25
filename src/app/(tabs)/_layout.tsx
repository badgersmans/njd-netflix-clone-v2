import { Tabs } from 'expo-router'
import Foundation from '@expo/vector-icons/Foundation';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen 
        name='myNetflix' 
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => <Foundation name="home" size={24} color={color} />
        }}
      />
      <Tabs.Screen 
        name='newAndHot' 
        options={{
          title: 'New and Hot',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="play-box-multiple-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen 
        name='index' 
        options={{
          title: 'My Netflix',
          tabBarIcon: ({ color }) => <MaterialIcons name="portrait" size={24} color={color} />,
        }}
      />
    </Tabs>
  )
}
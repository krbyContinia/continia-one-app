import { Tabs } from 'expo-router'
import { FontAwesome6, Feather } from '@expo/vector-icons'

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome6 name='house' size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name='approvals'
        options={{
          title: 'Approvals',
          tabBarIcon: ({ color }) => <FontAwesome6 name='check-circle' size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name='expenses'
        options={{
          title: 'Expenses',
          tabBarIcon: ({ color }) => <FontAwesome6 name='money-bill' size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name='purchases'
        options={{
          title: 'Purchases',
          tabBarIcon: ({ color }) => <FontAwesome6 name='bag-shopping' size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name='more'
        options={{
          title: 'More',
          tabBarIcon: ({ color }) => <Feather name='more-horizontal' size={24} color={color} />,
        }}
      />
    </Tabs>
  )
}

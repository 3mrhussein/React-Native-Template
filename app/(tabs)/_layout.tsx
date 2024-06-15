import React from 'react';
import { Tabs } from 'expo-router';
import icons from '../../constants/icons';
import TabIcon from '@/components/TabIcon';
import useCheckSession from '@/hooks/useCheckSession';
import theme from '@/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabLabel from '@/components/TabLabel/TabLabel';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

const TabsLayout = () => {
  return (
    <SafeAreaView
      mode='padding'
      style={{
        flex: 1,
        backgroundColor: theme.colors.light.DEFAULT,
      }}
    >
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: theme.colors.primary.DEFAULT,
          tabBarInactiveTintColor: '#ADADB0',
          tabBarStyle: {
            backgroundColor: theme.colors.light.DEFAULT,
            borderTopWidth: 1,
            borderTopColor: theme.colors.light[200],
            shadowColor: theme.colors.light[200],
            shadowRadius: 3,
            shadowOffset: {
              width: -5,
              height: -5,
            },
            height: 60,
            paddingBottom: 0,
          },
          tabBarItemStyle: {},
        }}
      >
        <Tabs.Screen
          name='home'
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused, size }) => (
              <AntDesign
                name='home'
                size={focused ? size + 5 : size}
                color={color}
              />
            ),
            tabBarLabel: ({ color, focused }) => (
              <TabLabel color={color} focused={focused} name={'Home'} />
            ),
          }}
        />
        <Tabs.Screen
          name='shop'
          options={{
            title: 'Shop',
            headerShown: false,
            tabBarIcon: ({ color, focused, size }) => (
              <Entypo
                name='shop'
                size={focused ? size + 5 : size}
                color={color}
              />
            ),
            tabBarLabel: ({ color, focused }) => (
              <TabLabel color={color} focused={focused} name={'Shop'} />
            ),
          }}
        />
        <Tabs.Screen
          name='cart'
          options={{
            title: 'Cart',
            headerShown: false,
            tabBarIcon: ({ color, focused, size }) => (
              <AntDesign
                name='shoppingcart'
                size={focused ? size + 5 : size}
                color={color}
              />
            ),
            tabBarLabel: ({ color, focused }) => (
              <TabLabel color={color} focused={focused} name={'Cart'} />
            ),
          }}
        />
        <Tabs.Screen
          name='favorites'
          options={{
            title: 'Favorites',
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <AntDesign
                name='heart'
                size={focused ? size + 5 : size}
                color={color}
              />
            ),
            tabBarLabel: ({ color, focused }) => (
              <TabLabel color={color} focused={focused} name={'Favorites'} />
            ),
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused, size }) => (
              <AntDesign
                name='user'
                size={focused ? size + 5 : size}
                color={color}
              />
            ),
            tabBarLabel: ({ color, focused }) => (
              <TabLabel color={color} focused={focused} name={'Profile'} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabsLayout;

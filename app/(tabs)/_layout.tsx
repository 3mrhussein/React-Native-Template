import React from 'react';
import { Tabs } from 'expo-router';
import icons from '../../constants/icons';
import TabIcon from '@/components/TabIcon';
import useCheckSession from '@/hooks/useCheckSession';
import theme from '@/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabLabel from '@/components/TabLabel/TabLabel';

const TabsLayout = () => {
  return (
    <SafeAreaView
      mode='padding'
      style={{
        flex: 1,
        backgroundColor: theme.colors.light,
      }}
    >
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: theme.colors.primary.DEFAULT,
          tabBarInactiveTintColor: '#ADADB0',
          tabBarStyle: {
            backgroundColor: theme.colors.light,
            borderTopWidth: 1,
            borderTopColor: '#232533',
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
              <TabIcon
                icon={icons.home}
                color={color}
                focused={focused}
                size={size}
              />
            ),
            tabBarLabel: ({ color, focused }) => (
              <TabLabel color={color} focused={focused} name={'Home'} />
            ),
          }}
        />
        <Tabs.Screen
          name='bookmark'
          options={{
            title: 'Bookmark',
            headerShown: false,
            tabBarIcon: ({ color, focused, size }) => (
              <TabIcon
                size={size}
                icon={icons.bookmark}
                color={color}
                focused={focused}
              />
            ),
            tabBarLabel: ({ color, focused }) => (
              <TabLabel color={color} focused={focused} name={'Bookmark'} />
            ),
          }}
        />
        <Tabs.Screen
          name='create'
          options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({ color, focused, size }) => (
              <TabIcon
                size={size}
                icon={icons.plus}
                color={color}
                focused={focused}
              />
            ),
            tabBarLabel: ({ color, focused }) => (
              <TabLabel color={color} focused={focused} name={'Create'} />
            ),
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused, size }) => (
              <TabIcon
                size={size}
                icon={icons.profile}
                color={color}
                focused={focused}
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

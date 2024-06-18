import { View, Text } from 'react-native';
import React from 'react';

const Badge = ({ bgColor = '#DB3021', text = '-20%', width = 45 }) => {
  return (
    <View className='rounded-full' style={{ backgroundColor: bgColor, width }}>
      <Text className={` text-white p-1 font-psemibold text-xs text-center`}>
        {text}
      </Text>
    </View>
  );
};

export default Badge;

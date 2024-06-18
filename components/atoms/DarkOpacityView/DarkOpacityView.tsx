import { View, Text } from 'react-native';
import React from 'react';

const DarkOpacityView = ({ opacity }) => {
  return (
    <View style={{ opacity }} className={`absolute h-full w-full bg-black `} />
  );
};

export default DarkOpacityView;

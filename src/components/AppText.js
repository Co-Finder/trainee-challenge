import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import defaultStyles from '../config/styles';
const AppText = ({children, style, numberOfLines}) => {
  return (
    <View>
      <Text numberOfLines={numberOfLines} style={[defaultStyles.text, style]}>
        {children}
      </Text>
    </View>
  );
};

export default AppText;
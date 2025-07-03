import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { COLORS } from '../constants/colors';

function PageLoader() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.background }}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
}

export default PageLoader;

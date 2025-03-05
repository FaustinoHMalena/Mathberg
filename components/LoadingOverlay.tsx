// components/LoadingOverlay.tsx
import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const LoadingOverlay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#2B78E4" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
});

export default LoadingOverlay;

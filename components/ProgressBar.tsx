// components/ProgressBar.tsx
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

type ProgressBarProps = {
  progress: number;
  color?: string;
};

const ProgressBar = ({ progress, color = '#4CAF50' }: ProgressBarProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${progress}%`, backgroundColor: color }]} />
      <Text style={styles.text}>{Math.round(progress)}% Complete</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginVertical: 10,
  },
  progress: {
    height: '100%',
    borderRadius: 10,
  },
  text: {
    position: 'absolute',
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProgressBar;

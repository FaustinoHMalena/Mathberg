// components/StreakFlame.tsx
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const StreakFlame = ({ days }: { days: number }) => {
  return (
    <View style={styles.container}>
      <MaterialIcons 
        name="whatshot" 
        size={32} 
        color={days > 0 ? '#FF5722' : '#666'} 
      />
      <Text style={styles.streakText}>{days}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  streakText: {
    color: '#FF5722',
    fontWeight: 'bold',
    marginTop: 4,
  },
});

export default StreakFlame;

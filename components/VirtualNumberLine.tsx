// components/VirtualNumberLine.tsx
import React, { useState } from 'react';
import { View, StyleSheet, PanResponder, Text } from 'react-native';

const VirtualNumberLine = ({ min = 0, max = 10 }) => {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt) => {
      const { locationX } = evt.nativeEvent;
      const numberWidth = 40;
      const num = Math.floor(locationX / numberWidth) + min;
      if (num >= min && num <= max) setSelectedNumber(num);
    },
  });

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      {Array.from({ length: max - min + 1 }).map((_, i) => (
        <View key={i} style={styles.numberContainer}>
          <View style={[
            styles.numberBox,
            selectedNumber === (i + min) && styles.selectedNumber
          ]}>
            <Text style={styles.numberText}>{i + min}</Text>
          </View>
          <View style={styles.lineSegment} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  numberContainer: {
    alignItems: 'center',
  },
  numberBox: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#2B78E4',
    borderRadius: 8,
    marginBottom: 4,
  },
  selectedNumber: {
    backgroundColor: '#E8F4FF',
  },
  numberText: {
    fontSize: 18,
    color: '#2B78E4',
  },
  lineSegment: {
    width: 40,
    height: 2,
    backgroundColor: '#2B78E4',
  },
});

export default VirtualNumberLine;

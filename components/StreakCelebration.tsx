// components/StreakCelebration.tsx
import React, { useEffect } from 'react';
import { View, StyleSheet, Animated, Text } from 'react-native';

const StreakCelebration = ({ streak }: { streak: number }) => {
  const scaleAnim = new Animated.Value(0);
  const opacityAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
        easing: Easing.elastic(2)
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true
      })
    ]).start();
  }, [streak]);

  return (
    <Animated.View style={[styles.container, { 
      opacity: opacityAnim,
      transform: [{ scale: scaleAnim }]
    }]}>
      <Text style={styles.text}>🔥 {streak} Day Streak!</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 215, 0, 0.9)',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    elevation: 5
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  }
});

export default StreakCelebration;

// components/PiperMascot.tsx
import React from 'react';
import { Animated, Easing, View } from 'react-native';

const PiperMascot = () => {
  const bounceValue = new Animated.Value(0);

  Animated.loop(
    Animated.sequence([
      Animated.timing(bounceValue, {
        toValue: 20,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(bounceValue, {
        toValue: 0,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ])
  ).start();

  return (
    <View style={{ position: 'absolute', top: 50, right: 20, zIndex: 1 }}>
      <Animated.Image
        source={require('../assets/piper-penguin.png')}
        style={{
          width: 100,
          height: 100,
          transform: [{ translateY: bounceValue }],
        }}
      />
    </View>
  );
};

export default PiperMascot;

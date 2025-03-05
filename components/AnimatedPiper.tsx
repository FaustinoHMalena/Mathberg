// components/AnimatedPiper.tsx
import React, { useEffect } from 'react';
import { Animated, Easing } from 'react-native';

type AnimatedPiperProps = {
  emotion: 'happy' | 'thinking' | 'celebrate';
  size?: number;
};

const AnimatedPiper = ({ emotion, size = 100 }: AnimatedPiperProps) => {
  const bounce = new Animated.Value(0);
  const rotate = new Animated.Value(0);

  useEffect(() => {
    Animated.parallel([
      Animated.loop(
        Animated.sequence([
          Animated.timing(bounce, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(bounce, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ),
      Animated.loop(
        Animated.timing(rotate, {
          toValue: 1,
          duration: 3000,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ),
    ]).start();
  }, []);

  const bounceInterpolation = bounce.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 15],
  });

  const rotateInterpolation = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.Image
      source={require('../assets/mascot/piper-penguin.png')}
      style={{
        width: size,
        height: size,
        transform: [
          { translateY: bounceInterpolation },
          { rotate: rotateInterpolation },
        ],
      }}
    />
  );
};

export default AnimatedPiper;

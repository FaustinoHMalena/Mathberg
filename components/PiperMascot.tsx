// components/PiperMascot.tsx
import React, { useState } from 'react';
import { Animated, Easing, TouchableOpacity, Dimensions } from 'react-native';
import { useUser } from '../contexts/UserContext';

const { width } = Dimensions.get('window');

const PiperMascot = () => {
  const { addPoints } = useUser();
  const bounceValue = new Animated.Value(0);
  const [isCelebrating, setIsCelebrating] = useState(false);

  // In PiperMascot.tsx
<Image
  ...
  accessibilityRole="image"
  accessibilityHint="Tap Piper for encouragement and bonus points!"
/>
  
  // Bounce animation
  Animated.loop(
    Animated.sequence([
      Animated.timing(bounceValue, {
        toValue: 10,
        duration: 1000,
        easing: Easing.elastic(2),
        useNativeDriver: true,
      }),
      Animated.timing(bounceValue, {
        toValue: 0,
        duration: 800,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ])
  ).start();

  

  // Celebration interaction
  const handlePress = () => {
    if (!isCelebrating) {
      setIsCelebrating(true);
      addPoints(5); // Reward points for interaction
      setTimeout(() => setIsCelebrating(false), 2000);
    }
  };

  return (
    <TouchableOpacity 
      onPress={handlePress}
      style={{
        position: 'absolute',
        top: width * 0.05,
        right: width * 0.03,
        zIndex: 100,
      }}
      accessibilityLabel="Interact with Piper the Penguin"
    >
      <Animated.Image
        source={require('../assets/mascot/piper-penguin.png')}
        style={{
          width: width * 0.15,
          height: width * 0.15,
          transform: [
            { translateY: bounceValue },
            { scale: isCelebrating ? 1.2 : 1 }
          ],
        }}
        accessibilityIgnoresInvertColors
      />
    </TouchableOpacity>
  );
};

export default PiperMascot;

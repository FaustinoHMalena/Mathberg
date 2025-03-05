// components/ExerciseFeedback.tsx
import React, { useEffect } from 'react';
import { View, StyleSheet, Animated, Text } from 'react-native';
import { playSound } from '../services/SoundService';

type FeedbackProps = {
  isCorrect: boolean;
  explanation: string;
};

const ExerciseFeedback = ({ isCorrect, explanation }: FeedbackProps) => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(2000),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();

    playSound(isCorrect ? 'correct' : 'wrong');
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={[styles.text, isCorrect ? styles.correct : styles.wrong]}>
        {isCorrect ? '🎉 Correct!' : '🤔 Try Again'}
      </Text>
      <Text style={styles.explanation}>{explanation}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 16,
    elevation: 5,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  correct: {
    color: '#4CAF50',
  },
  wrong: {
    color: '#F44336',
  },
  explanation: {
    marginTop: 8,
    color: '#666',
  },
});

export default ExerciseFeedback;

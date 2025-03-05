// components/CountdownTimer.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type TimerProps = {
  initialTime: number;
  onComplete: () => void;
};

const CountdownTimer = ({ initialTime, onComplete }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if(prev <= 1) {
          clearInterval(timer);
          onComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
      <Text style={styles.label}>Time Remaining</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  timerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2B78E4',
  },
  label: {
    fontSize: 16,
    color: '#666',
  },
});

export default CountdownTimer;

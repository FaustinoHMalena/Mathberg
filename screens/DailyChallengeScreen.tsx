// screens/DailyChallengeScreen.tsx
import { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { useUser } from '../contexts/UserContext';
import CountdownTimer from '../components/CountdownTimer';
import ExerciseStep from '../components/ExerciseStep';

const DailyChallengeScreen = () => {
  const { addPoints, userProgress } = useUser();
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
  const [challengeCompleted, setChallengeCompleted] = useState(false);

  // Load daily challenge progress
  useEffect(() => {
    if(userProgress.dailyChallenge) {
      setTimeLeft(userProgress.dailyChallenge.timeLeft);
    }
  }, []);

  const handleChallengeComplete = () => {
    addPoints(50);
    setChallengeCompleted(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Math Challenge</Text>
      <CountdownTimer 
        initialTime={timeLeft}
        onComplete={handleChallengeComplete}
      />
      
      {!challengeCompleted ? (
        <ExerciseStep
          question={dailyChallengeQuestions[0]} // Replace with actual questions
          onAnswer={(correct) => correct && addPoints(5)}
        />
      ) : (
        <Text style={styles.completeText}>Challenge Completed! 🎉</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  completeText: {
    fontSize: 20,
    color: 'green',
    marginTop: 20,
  },
});

export default DailyChallengeScreen;

// screens/ExerciseScreen.tsx
import { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useUser } from '../contexts/UserContext';
import ExerciseStep from '../components/ExerciseStep';
import ProgressBar from '../components/ProgressBar';
import PiperMascot from '../components/PiperMascot';

const ExerciseScreen = () => {
  const { id } = useLocalSearchParams();
  const { addPoints, recordAnswer, completeLesson } = useUser();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  // Temporary questions data - replace with your topics.json
  const questions = [
    { 
      id: 'q1',
      type: 'multiple_choice',
      question: 'How many penguins?',
      options: ['3', '5', '7'],
      correct: '5',
      explanation: 'Count the visible penguins carefully!'
    },
    // Add more questions
  ];

  const handleAnswer = (isCorrect: boolean) => {
    recordAnswer(isCorrect);
    
    if(isCorrect) {
      addPoints(10);
      if(currentQuestion === questions.length - 1) {
        completeLesson(id as string, 'current-lesson');
        Alert.alert('Lesson Complete!', 'Great job finishing this lesson!');
      }
      setCurrentQuestion(prev => Math.min(prev + 1, questions.length - 1));
    } else {
      Alert.alert('Try Again', 'Review the question and try another approach');
    }
  };

  return (
    <View style={styles.container}>
      <PiperMascot emotion={currentQuestion % 2 === 0 ? 'happy' : 'thinking'} />
      
      <ProgressBar 
        progress={(currentQuestion / questions.length) * 100}
        color="#2B78E4"
      />
      
      <ExerciseStep
        question={questions[currentQuestion]}
        onAnswer={handleAnswer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default ExerciseScreen;

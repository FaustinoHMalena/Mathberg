import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { topics } from '../../data/topics';
import { Exercise, Step } from '../../types/math';
import StepProgress from '../../components/StepProgress';
import ExerciseStep from '../../components/ExerciseStep';
import NumericKeypad from '../../components/NumericKeypad';
import MultipleChoiceOption from '../../components/MultipleChoiceOption';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function ExerciseScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [currentStep, setCurrentStep] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [answer, setAnswer] = useState('');
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // Find the exercise in the topics data
  const exercise = topics.flatMap((topic) =>
    topic.concepts.flatMap((concept) =>
      concept.exercises.filter((ex) => ex.id === id)
    )
  )[0];

  if (!exercise) {
    return (
      <View style={styles.container}>
        <Text>Exercise not found</Text>
      </View>
    );
  }

  const handleNumberPress = (num: number) => {
    if (answer.length < 10) {
      setAnswer(prev => prev + num.toString());
    }
  };

  const handleBackspace = () => {
    setAnswer(prev => prev.slice(0, -1));
  };

  const handleSubmit = () => {
    if (exercise.type === 'numeric') {
      const numericAnswer = parseFloat(answer);
      const isAnswerCorrect = numericAnswer === exercise.correctAnswer;
      setIsCorrect(isAnswerCorrect);
    }
  };

  const handleChoiceSelect = (choiceId: string) => {
    setSelectedChoice(choiceId);
    const isAnswerCorrect = choiceId === exercise.correctAnswer;
    setIsCorrect(isAnswerCorrect);
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: 'Exercise',
          headerShown: true,
        }}
      />
      <View style={styles.container}>
        <ScrollView style={styles.scrollContent}>
          <View style={styles.header}>
            <Text style={styles.problem}>{exercise.problem}</Text>
            {exercise.type === 'numeric' && (
              <View style={styles.answerContainer}>
                <Text style={styles.answerLabel}>Your Answer:</Text>
                <Text style={styles.answerDisplay}>{answer || '0'}</Text>
                {isCorrect !== null && (
                  <Animated.View
                    entering={FadeIn}
                    style={[
                      styles.feedback,
                      isCorrect ? styles.correctFeedback : styles.incorrectFeedback,
                    ]}>
                    <Ionicons
                      name={isCorrect ? 'checkmark-circle' : 'close-circle'}
                      size={24}
                      color={isCorrect ? '#059669' : '#dc2626'}
                    />
                    <Text
                      style={[
                        styles.feedbackText,
                        isCorrect ? styles.correctText : styles.incorrectText,
                      ]}>
                      {isCorrect ? 'Correct!' : 'Try Again'}
                    </Text>
                  </Animated.View>
                )}
              </View>
            )}
          </View>

          {exercise.type === 'multiple-choice' && exercise.choices && (
            <View style={styles.choicesContainer}>
              {exercise.choices.map((choice) => (
                <MultipleChoiceOption
                  key={choice.id}
                  choice={choice}
                  isSelected={selectedChoice === choice.id}
                  isCorrect={selectedChoice === choice.id ? isCorrect : null}
                  onSelect={() => handleChoiceSelect(choice.id)}
                />
              ))}
            </View>
          )}

          {exercise.steps && (
            <>
              <StepProgress
                currentStep={currentStep}
                totalSteps={exercise.steps.length}
              />
              <ExerciseStep
                step={exercise.steps[currentStep]}
                showHint={showHint}
                onToggleHint={() => setShowHint(!showHint)}
              />
              <View style={styles.navigation}>
                <Pressable
                  style={[styles.navButton, currentStep === 0 && styles.navButtonDisabled]}
                  onPress={() => setCurrentStep(prev => Math.max(0, prev - 1))}
                  disabled={currentStep === 0}>
                  <Ionicons name="arrow-back" size={24} color={currentStep === 0 ? '#94a3b8' : '#6366f1'} />
                  <Text style={[styles.navButtonText, currentStep === 0 && styles.navButtonTextDisabled]}>
                    Previous
                  </Text>
                </Pressable>
                <Pressable
                  style={[styles.navButton, currentStep === exercise.steps.length - 1 && styles.navButtonDisabled]}
                  onPress={() => setCurrentStep(prev => Math.min(exercise.steps.length - 1, prev + 1))}
                  disabled={currentStep === exercise.steps.length - 1}>
                  <Text style={[styles.navButtonText, currentStep === exercise.steps.length - 1 && styles.navButtonTextDisabled]}>
                    Next
                  </Text>
                  <Ionicons name="arrow-forward" size={24} color={currentStep === exercise.steps.length - 1 ? '#94a3b8' : '#6366f1'} />
                </Pressable>
              </View>
            </>
          )}
        </ScrollView>

        {exercise.type === 'numeric' && (
          <NumericKeypad
            onNumberPress={handleNumberPress}
            onBackspace={handleBackspace}
            onSubmit={handleSubmit}
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flex: 1,
  },
  header: {
    padding: 16,
    backgroundColor: '#f8fafc',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  problem: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 16,
  },
  answerContainer: {
    alignItems: 'center',
  },
  answerLabel: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 8,
  },
  answerDisplay: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  choicesContainer: {
    padding: 16,
  },
  feedback: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  correctFeedback: {
    backgroundColor: '#dcfce7',
  },
  incorrectFeedback: {
    backgroundColor: '#fee2e2',
  },
  feedbackText: {
    fontSize: 16,
    fontWeight: '600',
  },
  correctText: {
    color: '#059669',
  },
  incorrectText: {
    color: '#dc2626',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#eff6ff',
  },
  navButtonDisabled: {
    backgroundColor: '#f1f5f9',
  },
  navButtonText: {
    color: '#6366f1',
    fontWeight: '600',
  },
  navButtonTextDisabled: {
    color: '#94a3b8',
  },
});

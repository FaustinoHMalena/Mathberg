import { View, Text, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Step } from '../types/math';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

interface ExerciseStepProps {
  step: Step;
  showHint: boolean;
  onToggleHint: () => void;
}

export default function ExerciseStep({ step, showHint, onToggleHint }: ExerciseStepProps) {
  return (
    <Animated.View
      entering={FadeIn.duration(300)}
      exiting={FadeOut.duration(300)}
      style={styles.container}>
      <LinearGradient
        colors={['#f8fafc', '#f1f5f9']}
        style={styles.content}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <Text style={styles.instruction}>{step.instruction}</Text>
        
        <Pressable
          style={styles.hintButton}
          onPress={onToggleHint}>
          <Ionicons
            name={showHint ? 'bulb' : 'bulb-outline'}
            size={24}
            color="#6366f1"
          />
          <Text style={styles.hintButtonText}>
            {showHint ? 'Hide Hint' : 'Show Hint'}
          </Text>
        </Pressable>

        {showHint && (
          <Animated.View
            entering={FadeIn.duration(200)}
            style={styles.explanation}>
            <Text style={styles.explanationText}>{step.explanation}</Text>
          </Animated.View>
        )}

        {step.visualAid && (
          <View style={styles.visualAid}>
            <Text style={styles.visualAidCaption}>{step.visualAid.caption}</Text>
          </View>
        )}
      </LinearGradient>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  content: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  instruction: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 12,
  },
  hintButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 8,
  },
  hintButtonText: {
    color: '#6366f1',
    fontWeight: '500',
  },
  explanation: {
    backgroundColor: '#eff6ff',
    padding: 12,
    borderRadius: 12,
    marginTop: 8,
  },
  explanationText: {
    color: '#1e40af',
    fontSize: 14,
  },
  visualAid: {
    marginTop: 16,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  visualAidCaption: {
    color: '#64748b',
    fontSize: 14,
    textAlign: 'center',
  },
});

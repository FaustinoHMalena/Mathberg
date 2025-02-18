import { View, Text, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Exercise } from '../types/math';

interface ExerciseCardProps {
  exercise: Exercise;
  onPress: () => void;
}

export default function ExerciseCard({ exercise, onPress }: ExerciseCardProps) {
  const getDifficultyColor = (difficulty: Exercise['difficulty']) => {
    switch (difficulty) {
      case 'Easy':
        return ['#10b981', '#059669'];
      case 'Medium':
        return ['#f59e0b', '#d97706'];
      case 'Hard':
        return ['#ef4444', '#dc2626'];
    }
  };

  const getTypeIcon = (type: Exercise['type']) => {
    switch (type) {
      case 'multiple-choice':
        return 'list';
      case 'numeric':
        return 'calculator';
      case 'step-by-step':
        return 'git-branch';
      case 'word-problem':
        return 'book';
    }
  };

  return (
    <Pressable onPress={onPress}>
      <LinearGradient
        colors={getDifficultyColor(exercise.difficulty)}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <View style={styles.header}>
          <View style={styles.typeIcon}>
            <Ionicons
              name={getTypeIcon(exercise.type)}
              size={24}
              color="white"
            />
          </View>
          <View style={styles.points}>
            <Ionicons name="star" size={16} color="white" />
            <Text style={styles.pointsText}>{exercise.points}</Text>
          </View>
        </View>
        <Text style={styles.problem}>{exercise.problem}</Text>
        <View style={styles.footer}>
          <View style={styles.difficulty}>
            <Text style={styles.difficultyText}>{exercise.difficulty}</Text>
          </View>
          {exercise.hints.length > 0 && (
            <View style={styles.hints}>
              <Ionicons name="bulb" size={16} color="white" />
              <Text style={styles.hintsText}>
                {exercise.hints.length} {exercise.hints.length === 1 ? 'Hint' : 'Hints'}
              </Text>
            </View>
          )}
        </View>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  typeIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  points: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 4,
  },
  pointsText: {
    color: 'white',
    fontWeight: 'bold',
  },
  problem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  difficulty: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  difficultyText: {
    color: 'white',
    fontWeight: '500',
  },
  hints: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  hintsText: {
    color: 'white',
    opacity: 0.9,
  },
});

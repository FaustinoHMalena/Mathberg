import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Topic } from '../types/math';

interface TopicCardProps {
  topic: Topic;
  progress?: number;
  onPress: () => void;
}

export default function TopicCard({ topic, progress = 0, onPress }: TopicCardProps) {
  const getGradeLevelColor = (grade: Topic['gradeLevel']) => {
    const gradeNum = grade === 'K' ? 0 : parseInt(grade);
    if (gradeNum <= 5) {
      return ['#6366f1', '#4f46e5']; // Elementary
    } else if (gradeNum <= 8) {
      return ['#ec4899', '#db2777']; // Middle School
    } else {
      return ['#f59e0b', '#d97706']; // High School
    }
  };

  return (
    <Pressable onPress={onPress}>
      <LinearGradient
        colors={getGradeLevelColor(topic.gradeLevel)}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <View style={styles.header}>
          <View style={styles.gradeLevel}>
            <Text style={styles.gradeLevelText}>
              Grade {topic.gradeLevel}
            </Text>
          </View>
          <View style={styles.difficulty}>
            <Text style={styles.difficultyText}>{topic.difficulty}</Text>
          </View>
        </View>
        <Text style={styles.title}>{topic.title}</Text>
        <Text style={styles.description}>{topic.description}</Text>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View
              style={[styles.progressFill, { width: `${progress}%` }]}
            />
          </View>
          <Text style={styles.progressText}>{progress}% Complete</Text>
        </View>
        {topic.prerequisites.length > 0 && (
          <View style={styles.prerequisites}>
            <Ionicons name="information-circle" size={16} color="white" />
            <Text style={styles.prerequisitesText}>
              Prerequisites: {topic.prerequisites.length}
            </Text>
          </View>
        )}
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  gradeLevel: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  gradeLevelText: {
    color: 'white',
    fontWeight: 'bold',
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 16,
  },
  progressContainer: {
    marginBottom: 12,
  },
  progressBar: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 3,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 3,
  },
  progressText: {
    color: 'white',
    fontSize: 14,
  },
  prerequisites: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  prerequisitesText: {
    color: 'white',
    opacity: 0.9,
  },
});

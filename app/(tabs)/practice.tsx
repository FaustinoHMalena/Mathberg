import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { topics } from '../data/topics';
import ExerciseCard from '../components/ExerciseCard';

export default function PracticeScreen() {
  const exercises = topics.flatMap((topic) =>
    topic.concepts.flatMap((concept) =>
      concept.exercises.map((exercise) => ({
        ...exercise,
        topic: topic.title,
        concept: concept.title,
      }))
    )
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Practice</Text>
        <Text style={styles.subtitle}>
          Master concepts through interactive exercises
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Available Exercises</Text>
        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            onPress={() => router.push(`/exercise/${exercise.id}`)}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 4,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 16,
  },
});

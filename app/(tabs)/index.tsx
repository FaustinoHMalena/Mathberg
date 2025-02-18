import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { topics } from '../data/topics';
import TopicCard from '../components/TopicCard';

export default function LearnScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi, Student! 👋</Text>
        <Text style={styles.subtitle}>Ready to learn something new?</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Learning Path</Text>
        <Text style={styles.sectionSubtitle}>
          Topics are arranged by grade level and difficulty
        </Text>
        {topics.map((topic) => (
          <TopicCard
            key={topic.id}
            topic={topic}
            progress={30}
            onPress={() => {
              // Navigate to topic details
            }}
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
  greeting: {
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
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 16,
  },
});

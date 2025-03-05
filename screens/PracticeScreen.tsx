// screens/PracticeScreen.tsx
import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { useUser } from '../contexts/UserContext';
import { useTheme } from '../contexts/ThemeContext';
import TopicCard from '../components/TopicCard';
import LoadingOverlay from '../components/LoadingOverlay';
import PiperMascot from '../components/PiperMascot';

const PracticeScreen = () => {
  const { userProgress } = useUser();
  const { colors } = useTheme();
  const [topics, setTopics] = React.useState<Topic[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulated API call
    setTimeout(() => {
      setTopics(require('../data/topics.json'));
      setLoading(false);
    }, 1500);
  }, []);

  const getProgressPercentage = (topicId: string) => {
    const completed = userProgress.currentLessons[topicId] || 0;
    const total = topics.find(t => t.id === topicId)?.lessons.length || 1;
    return (completed / total) * 100;
  };

  if (loading) return <LoadingOverlay />;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <PiperMascot />
      <Text style={[styles.title, { color: colors.text }]}>Choose a Topic</Text>
      
      <FlatList
        data={topics}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TopicCard
            title={item.title}
            grade={item.grade}
            progress={getProgressPercentage(item.id)}
            onPress={() => {/* Navigate to lesson selection */}}
            isLocked={!userProgress.currentLessons[item.id]}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  list: {
    paddingBottom: 24,
  },
});

export default PracticeScreen;

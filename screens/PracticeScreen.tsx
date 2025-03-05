// screens/PracticeScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { useUser } from '../contexts/UserContext';
import { useTheme } from '../contexts/ThemeContext';
import TopicCard from '../components/TopicCard';
import LoadingOverlay from '../components/LoadingOverlay';
import PiperMascot from '../components/PiperMascot';

type Topic = {
  id: string;
  title: string;
  grade: string;
  lessons: Array<{
    id: string;
    title: string;
  }>;
};

const PracticeScreen = ({ navigation }) => {
  const { userProgress } = useUser();
  const { colors } = useTheme();
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load topics from local JSON file
    const loadTopics = async () => {
      try {
        const topicsData = require('../data/topics.json');
        setTopics(topicsData);
      } catch (error) {
        console.error('Failed to load topics:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadTopics();
  }, []);

  const getTopicProgress = (topicId: string) => {
    const completedLessons = Object.keys(userProgress.currentLessons[topicId] || {}).length;
    const totalLessons = topics.find(t => t.id === topicId)?.lessons.length || 0;
    return totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;
  };

  const handleTopicPress = (topicId: string) => {
    navigation.navigate('LessonSelection', { topicId });
  };

  if (loading) return <LoadingOverlay />;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <PiperMascot />
      <Text style={[styles.title, { color: colors.text }]}>Practice Topics</Text>
      
      <FlatList
        data={topics}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TopicCard
            title={item.title}
            grade={item.grade}
            progress={getTopicProgress(item.id)}
            onPress={() => handleTopicPress(item.id)}
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

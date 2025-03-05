// components/PracticeTopicSelection.tsx
import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useUser } from '../contexts/UserContext';
import TopicCard from './TopicCard';

type Topic = {
  id: string;
  title: string;
  grade: string;
  progress: number;
};

const PracticeTopicSelection = () => {
  const { userProgress } = useUser();
  
  // Temporary data - replace with your topics.json
  const topics: Topic[] = [
    { id: 'k-counting', title: 'Counting', grade: 'Kindergarten', progress: 45 },
    { id: '1-add', title: 'Addition', grade: '1st Grade', progress: 20 },
  ];

  return (
    <FlatList
      data={topics}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity 
          style={styles.card}
          onPress={() => {/* Navigate to lesson selection */}}
        >
          <TopicCard 
            title={item.title}
            grade={item.grade}
            progress={item.progress}
            isLocked={!userProgress.currentLessons[item.id]}
          />
        </TouchableOpacity>
      )}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    marginBottom: 12,
  },
});

export default PracticeTopicSelection;

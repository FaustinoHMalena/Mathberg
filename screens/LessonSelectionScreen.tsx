// screens/LessonSelectionScreen.tsx
import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import LessonCard from '../components/LessonCard';
import { useUser } from '../contexts/UserContext';

type Lesson = {
  id: string;
  title: string;
  status: 'locked' | 'unlocked' | 'completed';
};

const LessonSelectionScreen = () => {
  const { userProgress } = useUser();
  
  // Temporary data - replace with your topics.json structure
  const lessons: Lesson[] = [
    { id: '1', title: 'Counting to 10', status: 'completed' },
    { id: '2', title: 'Comparing Numbers', status: 'unlocked' },
    { id: '3', title: 'Basic Addition', status: 'locked' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Lesson</Text>
      <FlatList
        data={lessons}
        renderItem={({ item }) => (
          <LessonCard
            title={item.title}
            status={item.status}
            progress={userProgress.currentLessons[item.id] || 0}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    paddingBottom: 20,
  },
});

export default LessonSelectionScreen;

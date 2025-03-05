// screens/LessonSelectionScreen.tsx
import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { useUser } from '../contexts/UserContext';
import { useTheme } from '../contexts/ThemeContext';
import LessonCard from '../components/LessonCard';
import LoadingOverlay from '../components/LoadingOverlay';
import PiperMascot from '../components/PiperMascot';

const LessonSelectionScreen = ({ route }) => {
  const { topicId } = route.params;
  const { userProgress } = useUser();
  const { colors } = useTheme();
  const [lessons, setLessons] = React.useState<Lesson[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Load topic data from JSON
    const topicData = require('../data/topics.json').find(t => t.id === topicId);
    setLessons(topicData?.lessons || []);
    setLoading(false);
  }, [topicId]);

  const getLessonProgress = (lessonId: string) => {
    return userProgress.currentLessons[topicId]?.[lessonId] || 0;
  };

  if (loading) return <LoadingOverlay />;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <PiperMascot />
      <Text style={[styles.title, { color: colors.text }]}>
        {lessons[0]?.topicTitle || 'Lessons'}
      </Text>
      
      <FlatList
        data={lessons}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <LessonCard
            title={item.title}
            status={getLessonProgress(item.id) >= 1 ? 'completed' : 'unlocked'}
            progress={getLessonProgress(item.id)}
            onPress={() => {/* Navigate to exercise screen */}}
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

export default LessonSelectionScreen;

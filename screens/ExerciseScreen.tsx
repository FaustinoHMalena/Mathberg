// screens/ExerciseScreen.tsx
import { useLocalSearchParams } from 'expo-router';
import { TopicProgress, ExerciseStep } from '../components';

const ExerciseScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <TopicProgress topicId={id} />
      <ExerciseStep />
    </View>
  );
};

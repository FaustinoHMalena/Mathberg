// screens/ProfileScreen.tsx
import { View, StyleSheet, ScrollView } from 'react-native';
import { useUser } from '../contexts/UserContext';
import AchievementBadge from '../components/AchievementBadge';
import ProgressBar from '../components/ProgressBar';

const ProfileScreen = () => {
  const { userProgress } = useUser();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.statsContainer}>
        <Text style={styles.title}>Mathberg Profile</Text>
        <Text style={styles.points}>🏆 {userProgress.points} Points</Text>
        
        <ProgressBar progress={(userProgress.points / 1000) * 100} color="#2B78E4" />
        
        <Text style={styles.sectionTitle}>Achievements</Text>
        <View style={styles.badgesContainer}>
          <AchievementBadge name="Fast Learner" unlocked={userProgress.points >= 100} />
          <AchievementBadge name="Perfect Streak" unlocked={userProgress.dailyStreak >= 7} />
          <AchievementBadge name="Math Master" unlocked={userProgress.badges.includes('master')} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  statsContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  points: {
    fontSize: 18,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 15,
  },
  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

export default ProfileScreen;

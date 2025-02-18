import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const challenges = [
  {
    id: 'daily',
    title: 'Daily Challenge',
    description: 'Solve today\'s special problem',
    reward: '50 points',
    color: ['#6366f1', '#4f46e5'],
    icon: 'star',
    active: true,
  },
  {
    id: 'streak',
    title: '5-Day Streak',
    description: 'Complete challenges for 5 days in a row',
    reward: '200 points',
    color: ['#ec4899', '#db2777'],
    icon: 'flame',
    progress: 3,
    total: 5,
  },
  {
    id: 'mastery',
    title: 'Algebra Master',
    description: 'Complete all algebra exercises',
    reward: 'Gold Badge',
    color: ['#f59e0b', '#d97706'],
    icon: 'trophy',
    progress: 8,
    total: 10,
  },
];

export default function ChallengesScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Challenges</Text>
        <Text style={styles.subtitle}>
          Complete challenges to earn rewards!
        </Text>
      </View>

      <View style={styles.challengeList}>
        {challenges.map((challenge) => (
          <Pressable key={challenge.id} style={styles.challengeCard}>
            <LinearGradient
              colors={challenge.color}
              style={styles.challengeGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}>
              <View style={styles.challengeHeader}>
                <View style={styles.challengeIcon}>
                  <Ionicons name={challenge.icon} size={24} color="white" />
                </View>
                <View style={styles.challengeReward}>
                  <Text style={styles.rewardText}>{challenge.reward}</Text>
                </View>
              </View>
              <Text style={styles.challengeTitle}>{challenge.title}</Text>
              <Text style={styles.challengeDescription}>
                {challenge.description}
              </Text>
              {challenge.progress !== undefined && (
                <View style={styles.progressContainer}>
                  <View style={styles.progressBar}>
                    <View
                      style={[
                        styles.progressFill,
                        {
                          width: `${(challenge.progress / challenge.total) * 100}%`,
                        },
                      ]}
                    />
                  </View>
                  <Text style={styles.progressText}>
                    {challenge.progress}/{challenge.total}
                  </Text>
                </View>
              )}
              {challenge.active && (
                <Pressable style={styles.startButton}>
                  <Text style={styles.startButtonText}>Start Now</Text>
                </Pressable>
              )}
            </LinearGradient>
          </Pressable>
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
  challengeList: {
    padding: 20,
  },
  challengeCard: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
  },
  challengeGradient: {
    padding: 20,
  },
  challengeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  challengeIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  challengeReward: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  rewardText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  challengeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  challengeDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 16,
  },
  progressContainer: {
    marginBottom: 16,
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
  startButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  startButtonText: {
    color: '#6366f1',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

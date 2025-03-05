// screens/TeacherDashboardScreen.tsx
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useUser } from '../contexts/UserContext';
import ProgressHeatmap from '../components/ProgressHeatmap';

const TeacherDashboardScreen = () => {
  const { userProgress } = useUser();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Class Progress Overview</Text>
      <ProgressHeatmap />
      
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{userProgress.points}</Text>
          <Text style={styles.statLabel}>Total Points</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{userProgress.dailyStreak}</Text>
          <Text style={styles.statLabel}>Day Streak</Text>
        </View>
      </View>
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
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  statBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    width: '48%',
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2B78E4',
  },
  statLabel: {
    color: '#666',
    marginTop: 8,
  },
});

export default TeacherDashboardScreen;

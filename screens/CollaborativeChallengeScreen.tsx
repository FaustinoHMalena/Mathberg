// screens/CollaborativeChallengeScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { useUser } from '../contexts/UserContext';
import CollaborativeWhiteboard from '../components/CollaborativeWhiteboard';
import CountdownTimer from '../components/CountdownTimer';

const CollaborativeChallengeScreen = () => {
  const { userProgress, addPoints } = useUser();
  const [solution, setSolution] = useState('');
  const [participants, setParticipants] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticipants(prev => Math.min(prev + 1, 4));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSolve = (correct: boolean) => {
    if (correct) {
      addPoints(participants * 20);
      Alert.alert('Team Success!', `Your team solved it! +${participants * 20} points`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Group Challenge</Text>
      <CountdownTimer initialTime={300} onComplete={() => {}} />
      
      <View style={styles.participantContainer}>
        <Text>Participants: {participants}</Text>
        <View style={styles.avatars}>
          {Array(participants).fill(null).map((_, i) => (
            <View key={i} style={styles.avatar} />
          ))}
        </View>
      </View>

      <CollaborativeWhiteboard 
        problem="Solve for x: 2x + 5 = 15"
        onSolutionSubmit={handleSolve}
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
  participantContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  avatars: {
    flexDirection: 'row',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#2B78E4',
    marginLeft: -10,
  },
});

export default CollaborativeChallengeScreen;

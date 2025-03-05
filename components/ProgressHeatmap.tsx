// components/ProgressHeatmap.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ContributionGraph } from 'react-native-chart-kit';
import { useUser } from '../contexts/UserContext';

const ProgressHeatmap = () => {
  const { userProgress } = useUser();
  
  // Generate mock data for heatmap
  const heatmapData = Array.from({ length: 30 }).map((_, i) => ({
    date: new Date(Date.now() - (i * 24 * 60 * 60 * 1000)).toISOString(),
    count: Math.floor(Math.random() * 5) // Replace with real data
  }));

  return (
    <View style={styles.container}>
      <ContributionGraph
        values={heatmapData}
        endDate={new Date()}
        numDays={30}
        width={Dimensions.get('window').width - 40}
        height={160}
        chartConfig={{
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          color: (opacity = 1) => `rgba(43, 120, 228, ${opacity})`,
        }}
        squareSize={20}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderRadius: 12,
    backgroundColor: 'white',
    padding: 16,
  },
});

export default ProgressHeatmap;

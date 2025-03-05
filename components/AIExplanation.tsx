// components/AIExplanation.tsx
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const AIExplanation = ({ problem }: { problem: string }) => {
  const [expanded, setExpanded] = useState(false);
  
  // Mock AI-generated explanation
  const explanation = `To solve ${problem}, follow these steps:
  1. Identify the variables involved
  2. Apply the commutative property
  3. Simplify both sides
  4. Check your solution`;

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.header}
        onPress={() => setExpanded(!expanded)}
      >
        <MaterialIcons 
          name={expanded ? 'expand-less' : 'expand-more'} 
          size={24} 
          color="#2B78E4"
        />
        <Text style={styles.title}>Step-by-Step Explanation</Text>
      </TouchableOpacity>
      
      {expanded && <Text style={styles.explanation}>{explanation}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8FAFF',
    borderRadius: 8,
    marginVertical: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
    color: '#2B78E4',
  },
  explanation: {
    padding: 16,
    color: '#444',
    lineHeight: 24,
  },
});

export default AIExplanation;

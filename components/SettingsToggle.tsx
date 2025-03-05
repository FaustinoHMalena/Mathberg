// components/SettingsToggle.tsx
import React from 'react';
import { Switch, View, Text, StyleSheet } from 'react-native';

const SettingsToggle = ({ label, value, onToggle }: { 
  label: string; 
  value: boolean;
  onToggle: (value: boolean) => void 
}) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <Switch
      trackColor={{ false: '#767577', true: '#2B78E4' }}
      thumbColor={value ? '#f4f3f4' : '#f4f3f4'}
      onValueChange={onToggle}
      value={value}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  label: {
    fontSize: 16,
    color: '#333'
  }
});

export default SettingsToggle;

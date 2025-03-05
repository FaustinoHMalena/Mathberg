// screens/SettingsScreen.tsx (Enhanced)
import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { useUser } from '../contexts/UserContext';
import SettingsToggle from '../components/SettingsToggle';
import TimePicker from '../components/TimePicker';
import ThemedButton from '../components/ThemedButton';
import { useTheme } from '../contexts/ThemeContext';

const SettingsScreen = () => {
  const { userProgress, updateSettings } = useUser();
  const { colors } = useTheme();

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.section, { backgroundColor: colors.card }]}>
        <Text style={[styles.sectionTitle, { color: colors.primary }]}>Preferences</Text>
        
        <SettingsToggle
          label="Dark Mode"
          value={userProgress.settings.darkMode}
          onToggle={(value) => updateSettings({ darkMode: value })}
        />
        
        <SettingsToggle
          label="Sound Effects"
          value={userProgress.settings.soundEnabled}
          onToggle={(value) => updateSettings({ soundEnabled: value })}
        />

        <Text style={[styles.label, { color: colors.text }]}>Daily Reminder Time</Text>
        <TimePicker
          time={new Date(`2000-01-01T${userProgress.settings.notificationTime}`)}
          onChange={(newTime) => {
            const hours = newTime.getHours().toString().padStart(2, '0');
            const minutes = newTime.getMinutes().toString().padStart(2, '0');
            updateSettings({ notificationTime: `${hours}:${minutes}` });
          }}
        />
      </View>

      <View style={[styles.section, { backgroundColor: colors.card }]}>
        <ThemedButton
          title="Reset Progress"
          onPress={() => {/* Implement reset logic */}}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  section: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
  },
});

export default SettingsScreen;

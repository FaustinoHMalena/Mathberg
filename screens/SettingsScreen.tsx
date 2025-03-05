// screens/SettingsScreen.tsx
import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useUser } from '../contexts/UserContext';
import SettingsToggle from '../components/SettingsToggle';

const SettingsScreen = () => {
  const { userProgress, updateLearningStyle } = useUser();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Learning Preferences</Text>
        <SettingsToggle
          label="Dark Mode"
          value={userProgress.settings?.darkMode || false}
          onToggle={(value) => updateSettings({ darkMode: value })}
        />
        <SettingsToggle
          label="Sound Effects"
          value={userProgress.settings?.soundEnabled || true}
          onToggle={(value) => updateSettings({ soundEnabled: value })}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Learning Style</Text>
        <View style={styles.styleOptions}>
          {['visual', 'kinesthetic', 'auditory'].map((style) => (
            <TouchableOpacity
              key={style}
              style={[
                styles.styleButton,
                userProgress.adaptiveProfile.learningStyle === style && 
                styles.selectedStyle
              ]}
              onPress={() => updateLearningStyle(style)}
            >
              <Text style={styles.styleText}>{style.charAt(0).toUpperCase() + style.slice(1)}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  section: {
    marginBottom: 32
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#2B78E4'
  },
  styleOptions: {
    flexDirection: 'row',
    gap: 12
  },
  styleButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    backgroundColor: '#F0F4FF',
    borderWidth: 1,
    borderColor: '#2B78E4'
  },
  selectedStyle: {
    backgroundColor: '#2B78E4'
  },
  styleText: {
    color: '#2B78E4'
  }
});

export default SettingsScreen;

// components/TimePicker.tsx
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useTheme } from '../contexts/ThemeContext';

const TimePicker = ({ time, onChange }: { 
  time: Date;
  onChange: (newTime: Date) => void;
}) => {
  const { colors } = useTheme();
  const [showPicker, setShowPicker] = React.useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setShowPicker(true)}
        style={[styles.button, { backgroundColor: colors.card }]}
      >
        <Text style={[styles.text, { color: colors.text }]}>
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Text>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={time}
          mode="time"
          display="spinner"
          onChange={(_, selectedTime) => {
            setShowPicker(false);
            selectedTime && onChange(selectedTime);
          }}
          textColor={colors.text}
          themeVariant={colors.background === DarkTheme.colors.background ? 'dark' : 'light'}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});

export default TimePicker;

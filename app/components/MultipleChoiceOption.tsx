import { Pressable, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeIn } from 'react-native-reanimated';
import { Choice } from '../types/math';

interface MultipleChoiceOptionProps {
  choice: Choice;
  isSelected: boolean;
  isCorrect: boolean | null;
  onSelect: () => void;
}

export default function MultipleChoiceOption({
  choice,
  isSelected,
  isCorrect,
  onSelect,
}: MultipleChoiceOptionProps) {
  const getBackgroundColor = () => {
    if (isSelected && isCorrect === true) return '#dcfce7';
    if (isSelected && isCorrect === false) return '#fee2e2';
    if (isSelected) return '#eff6ff';
    return 'white';
  };

  const getBorderColor = () => {
    if (isSelected && isCorrect === true) return '#059669';
    if (isSelected && isCorrect === false) return '#dc2626';
    if (isSelected) return '#6366f1';
    return '#e2e8f0';
  };

  const getIcon = () => {
    if (isSelected && isCorrect === true) {
      return <Ionicons name="checkmark-circle" size={24} color="#059669" />;
    }
    if (isSelected && isCorrect === false) {
      return <Ionicons name="close-circle" size={24} color="#dc2626" />;
    }
    if (isSelected) {
      return <Ionicons name="radio-button-on" size={24} color="#6366f1" />;
    }
    return <Ionicons name="radio-button-off" size={24} color="#94a3b8" />;
  };

  return (
    <Pressable
      style={[
        styles.container,
        {
          backgroundColor: getBackgroundColor(),
          borderColor: getBorderColor(),
        },
      ]}
      onPress={onSelect}
      disabled={isCorrect !== null}>
      {getIcon()}
      <Text style={styles.text}>{choice.text}</Text>
      {isSelected && isCorrect !== null && (
        <Animated.Text
          entering={FadeIn.duration(300)}
          style={[
            styles.explanation,
            {
              color: isCorrect ? '#059669' : '#dc2626',
            },
          ]}>
          {choice.explanation}
        </Animated.Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 12,
    gap: 8,
  },
  text: {
    fontSize: 16,
    color: '#1e293b',
    flex: 1,
    marginLeft: 8,
  },
  explanation: {
    fontSize: 14,
    marginTop: 4,
    fontStyle: 'italic',
  },
});

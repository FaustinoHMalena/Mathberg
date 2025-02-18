import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface NumericKeypadProps {
  onNumberPress: (num: number) => void;
  onBackspace: () => void;
  onSubmit: () => void;
}

export default function NumericKeypad({
  onNumberPress,
  onBackspace,
  onSubmit,
}: NumericKeypadProps) {
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <Pressable
            key={num}
            style={styles.key}
            onPress={() => onNumberPress(num)}>
            <Text style={styles.keyText}>{num}</Text>
          </Pressable>
        ))}
        <Pressable
          style={styles.key}
          onPress={() => onNumberPress(0)}>
          <Text style={styles.keyText}>0</Text>
        </Pressable>
        <Pressable
          style={[styles.key, styles.actionKey]}
          onPress={onBackspace}>
          <Ionicons name="backspace" size={24} color="#6366f1" />
        </Pressable>
        <Pressable
          style={[styles.key, styles.actionKey]}
          onPress={onSubmit}>
          <Ionicons name="checkmark-circle" size={24} color="#6366f1" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f8fafc',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'center',
  },
  key: {
    width: '30%',
    aspectRatio: 2,
    backgroundColor: 'white',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  keyText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1e293b',
  },
  actionKey: {
    backgroundColor: '#eff6ff',
  },
});

// services/SoundService.ts
import { Audio } from 'expo-av';

export const playSound = async (type: 'correct' | 'wrong' | 'celebration') => {
  const sounds = {
    correct: require('../assets/sounds/correct.mp3'),
    wrong: require('../assets/sounds/wrong.mp3'),
    celebration: require('../assets/sounds/celebration.mp3'),
  };

  try {
    const { sound } = await Audio.Sound.createAsync(sounds[type]);
    await sound.playAsync();
  } catch (error) {
    console.error('Sound playback failed:', error);
  }
};

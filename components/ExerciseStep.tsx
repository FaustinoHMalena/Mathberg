// components/ExerciseStep.tsx
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MultipleChoiceOption from './MultipleChoiceOption';
import NumericKeypad from './NumericKeypad';

const ExerciseStep = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');

  const handleSubmit = () => {
    // Validation logic
    setCurrentStep(prev => prev + 1);
    setUserAnswer('');
  };

  return (
    <View>
      <StepProgress currentStep={currentStep} totalSteps={5} />
      <Text style={styles.question}>{currentQuestion.text}</Text>
      
      {currentQuestion.type === 'multiple_choice' ? (
        <MultipleChoiceOption 
          options={currentQuestion.options}
          onSelect={setUserAnswer}
        />
      ) : (
        <NumericKeypad value={userAnswer} onChange={setUserAnswer} />
      )}
      
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Submit Answer</Text>
      </TouchableOpacity>
    </View>
  );
};

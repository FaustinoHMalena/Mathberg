// services/AdaptiveLearning.ts
import { UserProgress } from '../contexts/UserContext';
import topics from '../data/topics.json';

const WEAKNESS_THRESHOLD = 0.6;
const STRENGTH_THRESHOLD = 0.85;
const MASTERY_THRESHOLD = 0.9;
const MAX_DIFFICULTY_LEVEL = 5;

interface Question {
  id: string;
  type: 'multiple_choice' | 'numeric_input' | 'interactive';
  difficulty: 'easy' | 'medium' | 'hard';
  modality: 'visual' | 'kinesthetic' | 'auditory';
  // ... other question properties
}

interface Topic {
  id: string;
  grade: string;
  title: string;
  lessons: Array<{
    id: string;
    exercises: Question[];
  }>;
}

export const getNextLesson = (userProgress: UserProgress): string => {
  // Calculate competency for each topic
  const competencies = Object.entries(userProgress.currentLessons)
    .map(([topicId, score]) => {
      const topic = (topics as Topic[]).find(t => t.id === topicId);
      const totalQuestions = topic?.lessons.flatMap(l => l.exercises).length || 1;
      return {
        topicId,
        competency: score / totalQuestions,
        grade: parseInt(topic?.grade.match(/\d+/)?.[0] || 0
      };
    });

  // 1. Prioritize weak areas not yet mastered
  const weakArea = competencies.find(c => 
    c.competency < WEAKNESS_THRESHOLD &&
    !userProgress.badges.includes(`${c.topicId}-mastered`)
  );
  if (weakArea) return weakArea.topicId;

  // 2. Progress to next grade level
  const currentMaxGrade = Math.max(...competencies.map(c => c.grade));
  const nextGradeTopic = (topics as Topic[]).find(t => 
    parseInt(t.grade.match(/\d+/)?.[0]) === currentMaxGrade + 1
  );
  if (nextGradeTopic) return nextGradeTopic.id;

  // 3. Reinforce strongest area for mastery
  const strongestArea = competencies.reduce((prev, current) => 
    (prev.competency > current.competency) ? prev : current
  );
  return strongestArea.topicId;
};

export const generatePersonalizedQuestions = (
  userProgress: UserProgress, 
  topicId: string
): Question[] => {
  const topic = (topics as Topic[]).find(t => t.id === topicId);
  if (!topic) return [];

  // Get base questions for the topic
  let questions = topic.lessons.flatMap(lesson => lesson.exercises);

  // Filter by difficulty level
  questions = questions.filter(q => 
    q.difficulty === 'easy' ? userProgress.adaptiveProfile.difficultyLevel >= 1 :
    q.difficulty === 'medium' ? userProgress.adaptiveProfile.difficultyLevel >= 3 :
    userProgress.adaptiveProfile.difficultyLevel >= 5
  );

  // Prioritize learning modality
  const modalityQuestions = questions.filter(q => 
    q.modality === userProgress.adaptiveProfile.learningStyle
  );

  // Balance with other modalities (70% preferred, 30% others)
  return [
    ...modalityQuestions.slice(0, Math.ceil(modalityQuestions.length * 0.7)),
    ...questions.filter(q => q.modality !== userProgress.adaptiveProfile.learningStyle)
               .slice(0, Math.floor(modalityQuestions.length * 0.3))
  ].sort(() => Math.random() - 0.5); // Shuffle questions
};

export const updateDifficultyLevel = (
  userProgress: UserProgress, 
  performance: number // 0-1 ratio of correct answers
): UserProgress['adaptiveProfile']['difficultyLevel'] => {
  const currentLevel = userProgress.adaptiveProfile.difficultyLevel;
  
  if (performance > MASTERY_THRESHOLD) {
    return Math.min(currentLevel + 1, MAX_DIFFICULTY_LEVEL);
  }
  
  if (performance < WEAKNESS_THRESHOLD) {
    return Math.max(currentLevel - 1, 1);
  }
  
  return currentLevel;
};

export const calculateMasteryScore = (
  userProgress: UserProgress,
  topicId?: string
): number => {
  if (topicId) {
    const topic = (topics as Topic[]).find(t => t.id === topicId);
    const totalExercises = topic?.lessons.flatMap(l => l.exercises).length || 1;
    return (userProgress.currentLessons[topicId] || 0) / totalExercises * 100;
  }
  
  // Overall mastery
  const totalPossible = (topics as Topic[]).flatMap(t => 
    t.lessons.flatMap(l => l.exercises)
  ).length;
  const totalCompleted = Object.values(userProgress.currentLessons).reduce((a, b) => a + b, 0);
  return (totalCompleted / totalPossible) * 100;
};

export const shouldUnlockMasteryBadge = (
  userProgress: UserProgress,
  topicId: string
): boolean => {
  const mastery = calculateMasteryScore(userProgress, topicId);
  return mastery >= MASTERY_THRESHOLD && 
         !userProgress.badges.includes(`${topicId}-mastered`);
};

// Helper for generating diagnostic report
export const getLearningInsights = (userProgress: UserProgress) => {
  return {
    preferredModality: userProgress.adaptiveProfile.learningStyle,
    currentDifficulty: userProgress.adaptiveProfile.difficultyLevel,
    overallMastery: calculateMasteryScore(userProgress),
    strongTopics: Object.entries(userProgress.currentLessons)
      .filter(([_, score]) => score >= STRENGTH_THRESHOLD)
      .map(([topicId]) => topics.find(t => t.id === topicId)?.title),
    weakTopics: Object.entries(userProgress.currentLessons)
      .filter(([_, score]) => score < WEAKNESS_THRESHOLD)
      .map(([topicId]) => topics.find(t => t.id === topicId)?.title)
  };
};

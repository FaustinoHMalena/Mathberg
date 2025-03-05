// services/AdaptiveLearning.ts
import { UserProgress } from '../contexts/UserContext';
import topics from '../data/topics.json';

export const getNextLesson = (userProgress: UserProgress): string => {
  const weaknessThreshold = 0.6;
  const strengthThreshold = 0.85;
  
  // Calculate competency in each area
  const competencies = Object.entries(userProgress.currentLessons).map(([topicId, score]) => {
    const totalQuestions = topics.find(t => t.id === topicId)?.lessons.flatMap(l => l.exercises).length || 1;
    return { topicId, competency: score / totalQuestions };
  });

  // Find weakest competent area
  const weakArea = competencies.find(c => 
    c.competency < weaknessThreshold &&
    !userProgress.badges.includes(`${c.topicId}-mastered`)
  );

  if (weakArea) return weakArea.topicId;

  // Find next logical progression
  const currentGrade = Math.min(
    ...competencies.map(c => 
      parseInt(topics.find(t => t.id === c.topicId)?.grade.match(/\d+/)?.[0] || 0
    )
  );
  
  return topics.find(t => 
    parseInt(t.grade.match(/\d+/)?.[0] === currentGrade + 1
  )?.id || topics[0].id;
};

export const generatePersonalizedQuestions = (userProgress: UserProgress) => {
  // AI-powered question generation simulation
  return topics.flatMap(topic => 
    topic.lessons.flatMap(lesson => 
      lesson.exercises.filter(ex => 
        userProgress.performance.correct / userProgress.performance.total < 0.7 ?
        ex.difficulty === 'easy' : ex.difficulty === 'medium'
      )
    )
  ).slice(0, 10); // Return 10 personalized questions
};

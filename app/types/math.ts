export interface Topic {
  id: string;
  title: string;
  description: string;
  gradeLevel: GradeLevel;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  prerequisites: string[];
  concepts: Concept[];
}

export interface Concept {
  id: string;
  title: string;
  description: string;
  examples: Example[];
  exercises: Exercise[];
}

export interface Example {
  id: string;
  problem: string;
  solution: Step[];
  explanation: string;
  visualAids?: VisualAid[];
}

export interface Exercise {
  id: string;
  problem: string;
  type: 'multiple-choice' | 'numeric' | 'step-by-step' | 'word-problem';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  steps?: Step[];
  choices?: Choice[];
  correctAnswer: string | number;
  explanation: string;
  hints: string[];
  points: number;
}

export interface Step {
  id: string;
  instruction: string;
  explanation: string;
  visualAid?: VisualAid;
}

export interface Choice {
  id: string;
  text: string;
  explanation: string;
}

export interface VisualAid {
  type: 'image' | 'animation' | 'graph' | 'diagram';
  url: string;
  caption: string;
}

export type GradeLevel = 
  | 'K' 
  | '1' 
  | '2' 
  | '3' 
  | '4' 
  | '5' 
  | '6' 
  | '7' 
  | '8' 
  | '9' 
  | '10' 
  | '11' 
  | '12';

export interface UserProgress {
  userId: string;
  completedTopics: string[];
  completedExercises: string[];
  masteredConcepts: string[];
  currentStreak: number;
  totalPoints: number;
  level: number;
  badges: Badge[];
  recentActivity: Activity[];
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  dateEarned: string;
}

export interface Activity {
  id: string;
  type: 'exercise' | 'challenge' | 'achievement';
  title: string;
  description: string;
  points: number;
  timestamp: string;
}

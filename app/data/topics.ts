import { Topic } from '../types/math';

export const topics: Topic[] = [
  {
    id: 'basic-numbers',
    title: 'Numbers and Counting',
    description: 'Learn to count, recognize numbers, and understand basic number concepts',
    gradeLevel: 'K',
    difficulty: 'Beginner',
    prerequisites: [],
    concepts: [
      {
        id: 'counting-1-10',
        title: 'Counting from 1 to 10',
        description: 'Learn to count objects and recognize numbers from 1 to 10',
        examples: [
          {
            id: 'counting-apples',
            problem: 'Count the apples',
            solution: [
              {
                id: 'step-1',
                instruction: 'Point to each apple and count out loud',
                explanation: 'Counting helps us know how many objects there are',
                visualAid: {
                  type: 'image',
                  url: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?w=500&h=300&fit=crop',
                  caption: 'Count the red apples one by one',
                },
              },
            ],
            explanation: 'We count one object at a time to find the total number',
          },
        ],
        exercises: [
          {
            id: 'count-stars',
            problem: 'How many stars do you see?',
            type: 'numeric',
            difficulty: 'Easy',
            correctAnswer: 5,
            explanation: 'Count each star one by one to find the total',
            hints: ['Point to each star as you count', 'Count slowly and carefully'],
            points: 10,
          },
          {
            id: 'identify-number',
            problem: 'Which number comes after 4?',
            type: 'multiple-choice',
            difficulty: 'Easy',
            choices: [
              {
                id: '3',
                text: '3',
                explanation: '3 comes before 4, not after it.',
              },
              {
                id: '5',
                text: '5',
                explanation: 'Correct! 5 comes right after 4 when counting.',
              },
              {
                id: '6',
                text: '6',
                explanation: '6 comes two numbers after 4.',
              },
              {
                id: '4',
                text: '4',
                explanation: 'This is the same number, not the next one.',
              },
            ],
            correctAnswer: '5',
            explanation: 'When counting up, 5 comes right after 4',
            hints: ['Think about counting from 1 to 10', 'Count up from 4'],
            points: 10,
          },
        ],
      },
    ],
  },
];

import type { Exercise } from '../../models/Exercise'

const exampleExercises: Exercise[] = [
  {
    id: 1,
    name: 'Push-up',
    description:
      'Push your body up and down and up and down until you can do no more.',
    difficulty: 'Easy',
    equipment: 'None',
    primaryMuscleGroup: ['Chest'],
    type: ['Strength'],
    variations: ['Wide grip', 'Diamond', 'Incline', 'Decline']
  },
  {
    id: 2,
    name: 'Pull-up',
    description: 'Pull your body up and down',
    difficulty: 'Hard',
    equipment: 'Pull-up bar',
    primaryMuscleGroup: ['Back'],
    type: ['Strength'],
    variations: ['Chin-up', 'Neutral grip', 'Wide grip']
  },
  {
    id: 3,
    name: 'Squat',
    description: 'Bend your knees and stand up',
    difficulty: 'Medium',
    equipment: 'Barbell',
    primaryMuscleGroup: ['Legs'],
    type: ['Strength'],
    variations: ['Front squat', 'Overhead squat']
  },
  {
    id: 4,
    name: 'Plank',
    description: 'Hold your body in a straight line',
    difficulty: 'Medium',
    equipment: 'None',
    primaryMuscleGroup: ['Core'],
    type: ['Strength']
  },
  {
    id: 5,
    name: 'Deadlift',
    description:
      'Lift a barbell from the ground all the way up to your hips, then back down to the ground.',
    difficulty: 'Hard',
    equipment: 'Barbell',
    primaryMuscleGroup: ['Back'],
    type: ['Strength'],
    variations: ['Sumo deadlift', 'Romanian Deadlift']
  }
]

export default exampleExercises

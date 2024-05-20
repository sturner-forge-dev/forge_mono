import { pgEnum } from 'drizzle-orm/pg-core'

// declaring enum in database
export const difficultyEnum = pgEnum('difficulty', [
  'easy',
  'intermediate',
  'hard',
  'expert'
])

export const equipmentEnum = pgEnum('equipment', [
  'dumbbell',
  'barbell',
  'kettlebell',
  'medicine_ball',
  'resistance_band',
  'machine',
  'cable',
  'bodyweight',
  'none'
])

export const muscleGroupEnum = pgEnum('muscle_group', [
  'chest',
  'back',
  'shoulders',
  'biceps',
  'triceps',
  'legs',
  'abs',
  'glutes',
  'calves',
  'forearms',
  'traps',
  'neck',
  'adductors',
  'abductors',
  'obliques',
  'lower_back',
  'upper_back',
  'quads'
])

export const exerciseTypeEnum = pgEnum('exercise_type', [
  'cardio',
  'strength',
  'flexibility',
  'balance',
  'power',
  'plyometric',
  'agility',
  'stability',
  'stretching',
  'warmup',
  'cooldown',
  'other'
])

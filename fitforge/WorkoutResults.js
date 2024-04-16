// WorkoutResults.js
import React from 'react';
import { View, Text } from 'react-native';

const WorkoutResults = ({ route }) => {
  const { selectedGoal, selectedExperience } = route.params;

  // Implement logic to display workout plans based on selectedGoal and selectedExperience

  return (
    <View>
      <Text>Workout Results for Goal: {selectedGoal} and Experience: {selectedExperience}</Text>
      {/* Display workout plans based on selectedGoal and selectedExperience */}
    </View>
  );
};

export default WorkoutResults;

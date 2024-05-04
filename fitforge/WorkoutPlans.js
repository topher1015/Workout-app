import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const WorkoutPlans = ({ navigation }) => {
  const [selectedGoal, setSelectedGoal] = useState('loseWeight');
  const [selectedExperience, setSelectedExperience] = useState('beginner');

  const goals = [
    { label: 'Lose Weight', value: 'loseWeight' },
    { label: 'Build Muscle', value: 'buildMuscle' },
    { label: 'Get Fit', value: 'getFit' },
  ];

  const experiences = [
    { label: 'Beginner', value: 'beginner' },
    { label: 'Intermediate', value: 'intermediate' },
    { label: 'Advanced', value: 'advanced' },
  ];

  const handleNextButtonPress = () => {
    navigation.navigate('WorkoutResults', { selectedGoal, selectedExperience });
  };

  return (
    <View style={styles.flexContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Workout Options</Text>

        {/* Goals Selection */}
        <Text style={styles.subtitle}>Goals</Text>
        {goals.map((goal) => (
          <TouchableOpacity
            key={goal.value}
            style={[
              styles.button,
              selectedGoal === goal.value && styles.selectedButton,
            ]}
            onPress={() => setSelectedGoal(goal.value)}>
            <Text style={styles.buttonText}>{goal.label}</Text>
          </TouchableOpacity>
        ))}

        {/* Experience Selection */}
        <Text style={styles.subtitle}>Experience</Text>
        {experiences.map((experience) => (
          <TouchableOpacity
            key={experience.value}
            style={[
              styles.button,
              selectedExperience === experience.value && styles.selectedButton,
            ]}
            onPress={() => setSelectedExperience(experience.value)}>
            <Text style={styles.buttonText}>{experience.label}</Text>
          </TouchableOpacity>
        ))}

        {/* Next Button */}
        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleNextButtonPress}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation Buttons */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity
          style={[styles.bottomButton, { borderLeftWidth: 0 }]}
          onPress={() => navigation.navigate('Homepage')}>
          <Text style={styles.bottomButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => navigation.navigate('WorkoutPlans')}>
          <Text style={styles.bottomButtonText}>Workout Plans</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.bottomButtonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blue',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    width: 200,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: '#007bff',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
  nextButton: {
    marginTop: 20,
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  bottomButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bottomButton: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderColor: '#c0c0c0',
    borderWidth: 1,
    borderLeftWidth: 1, 
  },
  bottomButtonText: {
    fontSize: 16,
  },
});

export default WorkoutPlans;

//Options for user to choose from goals and experience, will have more navigation and options with full blown app, for now just the one option of lose weight and beginner

// This function was optimized with assistance from OpenAI's ChatGPT to handle state management more efficiently.

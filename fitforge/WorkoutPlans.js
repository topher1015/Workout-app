// WorkoutPlans.js
import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet, TouchableOpacity } from 'react-native';

const WorkoutPlans = ({ navigation }) => {
  const [selectedGoal, setSelectedGoal] = useState('loseWeight');
  const [selectedExperience, setSelectedExperience] = useState('beginner');

  const handleNextButtonPress = () => {
    navigation.navigate('WorkoutResults', { selectedGoal, selectedExperience });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Plans</Text>

      {/* Goal Dropdown */}
      <Text style={styles.subtitle}>Goals</Text>
      <Picker
        selectedValue={selectedGoal}
        onValueChange={(itemValue) => setSelectedGoal(itemValue)}
        style={styles.dropdown}
      >
        <Picker.Item label="Lose Weight" value="loseWeight" />
        <Picker.Item label="Build Muscle" value="buildMuscle" />
        <Picker.Item label="Get Fit" value="getFit" />
      </Picker>

      {/* Experience Dropdown */}
      {selectedGoal === 'loseWeight' && (
        <View>
          <Text style={styles.subtitle}>Experience</Text>
          <Picker
            selectedValue={selectedExperience}
            onValueChange={(itemValue) => setSelectedExperience(itemValue)}
            style={styles.dropdown}
          >
            <Picker.Item label="Beginner" value="beginner" />
            <Picker.Item label="Intermediate" value="intermediate" />
            <Picker.Item label="Advanced" value="advanced" />
          </Picker>
        </View>
      )}

      {/* Next Button and Bottom Navigation Buttons */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNextButtonPress}>
        <Text style={[styles.buttonText, { color: '#fff' }]}>Next</Text>
      </TouchableOpacity>

      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.bottomButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton} onPress={() => navigation.navigate('WorkoutPlans')}>
          <Text style={styles.buttonText}>Workout Plans</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dropdown: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  nextButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#007bff', // Blue background color for "Next" button
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  bottomButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#c0c0c0',
  },
  bottomButton: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#e0e0e0', // Grey background color for bottom buttons
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default WorkoutPlans;

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const ShredSched = ({ navigation }) => {
  const days = [
    { key: 1, title: 'Day 1: Shoulders and Back', screen: 'Day1Lean' },
    { key: 2, title: 'Day 2: Biceps and Triceps', screen: 'Day2Lean' },
    { key: 3, title: 'Day 3: Cardio', screen: 'Day3Lean' },
    { key: 4, title: 'Day 4: Legs and Chest', screen: 'Day4Lean' },
    { key: 5, title: 'Day 5: Abs and Cardio', screen: 'Day5Lean' },
    { key: 6, title: 'Day 6: Abs and Cardio', screen: 'Day6Lean' },
    { key: 7, title: 'Day 7: Rest', screen: 'Day7Lean' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Workout Schedule</Text>
      {days.map((day) => (
        <View key={day.key} style={styles.dayContainer}>
          <Text style={styles.dayText}>{day.title}</Text>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => navigation.navigate(day.screen)}
            accessibilityLabel={`Start ${day.title}`}
            accessibilityRole="button">
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        </View>
      ))}
      <View style={styles.navContainer}>
        <TouchableOpacity
          style={[styles.navButton, { borderLeftWidth: 0 }]}
          onPress={() => navigation.navigate('Homepage')}
          accessibilityLabel="Go to Homepage"
          accessibilityRole="button">
          <Text style={styles.navbuttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('WorkoutPlans')}
          accessibilityLabel="View Workout Plans"
          accessibilityRole="button">
          <Text style={styles.navbuttonText}>Workout Plans</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Profile')}
          accessibilityLabel="View Profile"
          accessibilityRole="button">
          <Text style={styles.navbuttonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 20,
  },
  dayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  dayText: {
    fontSize: 18,
  },
  startButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#c0c0c0',
    backgroundColor: '#f0f0f0',
    marginTop: 20,
  },
  navButton: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderColor: '#c0c0c0',
    borderWidth: 1,
    borderLeftWidth: 0,
  },
  navbuttonText: {
    fontSize: 15,
  },
});

export default ShredSched;

//Schedule shows 7 days for the week, option to click on select to go to day

// This function was optimized with assistance from OpenAI's ChatGPT to handle state management more efficiently.

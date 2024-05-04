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
    { key: 1, title: 'Day 1: Back and Abs', screen: 'Day1Shred' },
    { key: 2, title: 'Day 2: Legs', screen: 'Day2Shred' },
    { key: 3, title: 'Day 3: Shoulders and Cardio', screen: 'Day3Shred' },
    { key: 4, title: 'Day 4: Chest and Triceps', screen: 'Day4Shred' },
    { key: 5, title: 'Day 5: Biceps and Abs', screen: 'Day5Shred' },
    { key: 6, title: 'Day 6: Cardio', screen: 'Day6Shred' },
    { key: 7, title: 'Day 7: Rest', screen: 'Day7Shred' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Workout Schedule</Text>
      {days.map((day) => (
        <View key={day.key} style={styles.dayContainer}>
          <Text style={styles.dayText}>{day.title}</Text>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => navigation.navigate(day.screen)}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        </View>
      ))}
      <View style={styles.navContainer}>
        <TouchableOpacity
          style={[styles.navButton, { borderLeftWidth: 1 }]}
          onPress={() => navigation.navigate('Homepage')}>
          <Text style={styles.navbuttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('WorkoutPlans')}>
          <Text style={styles.navbuttonText}>Workout Plans</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Profile')}>
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

//Breakdown of the days of the week for plan, 7 days total to be selected from

// This function was optimized with assistance from OpenAI's ChatGPT to handle state management more efficiently.

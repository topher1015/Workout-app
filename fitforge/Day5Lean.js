import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Day5Lean = ({ navigation }) => {
  const workouts = [
    {
      id: 1,
      name: 'Crunches',
      sets: '4',
      reps: '15',
      rest: '30s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMn30lJNR73wRR4lIwn5T_y5bziSvN8pXKg&s',
    },
    {
      id: 2,
      name: 'Decline Sit Up',
      sets: '3',
      reps: '1 min',
      rest: '30s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc7PYSxLd2otRaay0jau5cYSLtFRnyEYwLeg&s',
    },
    {
      id: 3,
      name: 'Russian Twists',
      sets: '3',
      reps: '20 each side',
      rest: '30s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoqFMrv4WgoQOpwxv1dSJCi3sOiIus9DHvNw&s',
    },
    {
      id: 4,
      name: 'Treadmill Running',
      sets: '1',
      reps: '45 min',
      rest: 'N/A',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1_ySay4bVsswKT5HL3Gh-tFecJpu-hTLRHQ&s',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Abs and Cardio</Text>
      {workouts.map((workout) => (
        <View key={workout.id} style={styles.workoutContainer}>
          <Image source={{ uri: workout.imageUri }} style={styles.image} />
          <View style={styles.infoContainer}>
            <Text style={styles.workoutName}>{workout.name}</Text>
            <Text>Sets: {workout.sets}</Text>
            <Text>Reps: {workout.reps}</Text>
            <Text>Rest: {workout.rest}</Text>
          </View>
        </View>
      ))}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('Day6Lean')}>
        <Text style={styles.nextButtonText}>Next Workout</Text>
      </TouchableOpacity>
      <View style={styles.navContainer}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Homepage')}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('WorkoutPlans')}>
          <Text style={styles.buttonText}>Workout Plans</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.buttonText}>Profile</Text>
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
  workoutContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 100,
    marginRight: 20,
  },
  infoContainer: {
    justifyContent: 'space-around',
  },
  workoutName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 60,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  navButton: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderColor: '#c0c0c0',
    borderWidth: 1,
    borderLeftWidth: 1,
  },
  buttonText: {
    fontSize: 15,
  },
});

export default Day5Lean;

// This function was optimized with assistance from OpenAI's ChatGPT to handle state management more efficiently.

import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Day5Shred = ({ navigation }) => {
  const workouts = [
    {
      id: 1,
      name: 'Pull-Ups',
      sets: '4',
      reps: '12',
      rest: '60s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwlbPUucVao0GlRHb6iYXnQrJ2ZD8gBv0d7g&s',
    },
    {
      id: 2,
      name: 'Bent Over Rows',
      sets: '4',
      reps: '10',
      rest: '60s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyNBjdpcnwU9M8AGWnBDfSneFwe1SqveWlsQ&s',
    },
    {
      id: 3,
      name: 'Lat Pulldowns',
      sets: '3',
      reps: '12',
      rest: '45s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJR8ttzKpLIkzZEsyvqPS5DAQFbO1d_XCNg&s',
    },
    {
      id: 4,
      name: 'Seated Rows',
      sets: '3',
      reps: '10',
      rest: '45s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGtAHeOMzcUBl-w6aWf-z2CLDTCl6U1JjOlQ&s',
    },
    {
      id: 5,
      name: 'Crunches',
      sets: '3',
      reps: '15',
      rest: '30s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7h5vHo5B8U29nFiVcboV0ujUpAZs6Mmtwnw&s',
    },
    {
      id: 6,
      name: 'Plank',
      sets: '3',
      reps: '1 min',
      rest: '30s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIOUPYEMMi52kpx5Nd1VHb3mS2-8c7IEelyQ&s',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Back and Abs</Text>
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
        onPress={() => navigation.navigate('Day6Shred')}>
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

export default Day5Shred;

// This function was optimized with assistance from OpenAI's ChatGPT to handle state management more efficiently.

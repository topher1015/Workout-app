import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Day1Shred = ({ navigation }) => {
  const workouts = [
    {
      id: 1,
      name: 'Hammer Curls',
      sets: '4',
      reps: '12',
      rest: '30s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9eqtzoauh8PhIMY8ZqEV8EtKXDEKHW-TYFg&s',
    },
    {
      id: 2,
      name: 'Concentration Curls',
      sets: '3',
      reps: '10',
      rest: '30s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ZEBHwJnEAZB3H7alWb7XkboIWIAV6cXWQQ&s',
    },
    {
      id: 3,
      name: 'Strait Bar Cable Curls',
      sets: '4',
      reps: '12',
      rest: '30s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVTrfHWWfIkPTjzNTbw5JpD1bGjx4Axybgbg&s',
    },
    {
      id: 4,
      name: 'Preacher Curls',
      sets: '3',
      reps: '10',
      rest: '30s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSC8_wjyk2Kbz_PjD8H3SOJGQPqZYJzIXKxQ&s',
    },
    {
      id: 5,
      name: 'Crunches',
      sets: '4',
      reps: '20',
      rest: '15s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMn30lJNR73wRR4lIwn5T_y5bziSvN8pXKg&s',
    },
    {
      id: 6,
      name: 'Hanging Leg Raise',
      sets: '3',
      reps: '15',
      rest: '30s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qsJjWoLCFYR5QqMhzzG2Dw3D1J7XGjm06Q&s',
    },
    {
      id: 7,
      name: 'Plank',
      sets: '3',
      reps: '60s',
      rest: '30s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIOUPYEMMi52kpx5Nd1VHb3mS2-8c7IEelyQ&s',
    },
    {
      id: 8,
      name: 'Oblique Crunches',
      sets: '3',
      reps: '15 each side',
      rest: '15s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT08ZNfJqUINZFUBofzJP7a1_0iOmsvn8UJqg&s',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Biceps and Abs</Text>
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
        onPress={() => navigation.navigate('Day2Shred')}>
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

export default Day1Shred;

// This function was optimized with assistance from OpenAI's ChatGPT to handle state management more efficiently.

import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Day4Shred = ({ navigation }) => {
  const workouts = [
    {
      id: 1,
      name: 'Bench Press',
      sets: '4',
      reps: '12',
      rest: '60s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA76RexMZaH9zVmfmODx-xIzkcK3maL2U9nQ&s',
    },
    {
      id: 2,
      name: 'Incline Dumbbell Press',
      sets: '3',
      reps: '10',
      rest: '60s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJgRW0JZj8QjGzzzh-rYm_lx39g3PxitJGyQ&s',
    },
    {
      id: 3,
      name: 'Machine Chest Flys',
      sets: '3',
      reps: '15',
      rest: '45s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY2nwYwtZJQc4aphL31cWzPB4n5d6dgdbDxw&s',
    },
    {
      id: 4,
      name: 'Hight Cable Crossovers',
      sets: '3',
      reps: '15',
      rest: '45s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5vwpQ8GYDGfRLKNuTppCUD95HqEB-2ym1yA&s',
    },
    {
      id: 5,
      name: 'Tricep Dips',
      sets: '4',
      reps: '12',
      rest: '60s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTenwXPwS0CEX-yBhgZex_7zfDHjF_S5Cci2w&s',
    },
    {
      id: 6,
      name: 'Skull Crushers',
      sets: '3',
      reps: '10',
      rest: '60s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL1Vth4TZfOsJq_P8UZZk2nHG4rcaMxBD3WQ&s',
    },
    {
      id: 7,
      name: 'Close Grip Bench Press',
      sets: '3',
      reps: '12',
      rest: '60s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Oug6Loyrk3yEkotlah1Z78O4tqU6pHdnFg&s',
    },
    {
      id: 8,
      name: 'Tricep Pushdowns',
      sets: '3',
      reps: '15',
      rest: '45s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaZBzQBM0akprEpqQHfp-j0FUuB9XMVS50pA&s',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Chest and Triceps</Text>
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
        onPress={() => navigation.navigate('Day5Shred')}>
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

export default Day4Shred;

// This function was optimized with assistance from OpenAI's ChatGPT to handle state management more efficiently.

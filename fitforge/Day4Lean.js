import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Day4Lean = ({ navigation }) => {
  const workouts = [
    {
      id: 1,
      name: 'Squats',
      sets: '4',
      reps: '12',
      rest: '60s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyX4pGV-v-o7B8u4OdyfZcI8OVrbDtvxr_Lw&s',
    },
    {
      id: 2,
      name: 'Leg Press',
      sets: '3',
      reps: '10',
      rest: '60s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdzDkQVzmgaAoDWgJmD2BxTxNFOqnZYpd4jg&s',
    },
    {
      id: 3,
      name: 'Lunges',
      sets: '3',
      reps: '15',
      rest: '45s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjXAw7Af2b46MNthW_J25rA6s6747wTMrV4g&s',
    },
    {
      id: 4,
      name: 'Bench Press',
      sets: '4',
      reps: '12',
      rest: '60s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA76RexMZaH9zVmfmODx-xIzkcK3maL2U9nQ&s',
    },
    {
      id: 5,
      name: 'Chest Flys',
      sets: '3',
      reps: '10',
      rest: '45s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNS5OnL5W1CRRC9PihsRYfabtwdaTlkYPrxQ&s',
    },
    {
      id: 6,
      name: 'Incline Bench Press',
      sets: '3',
      reps: '12',
      rest: '45s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2PvDTyYDCO8NEDcpNFodZcqHuaN7gMTzhQ&s',
    },
    {
      id: 7,
      name: 'Calf Raises',
      sets: '4',
      reps: '20',
      rest: '30s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWuL-ot7yXca8kQwRSA4AybcxaxGRICmFdIw&s',
    },
    {
      id: 8,
      name: 'Pec Deck Machine',
      sets: '3',
      reps: '15',
      rest: '45s',
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY2nwYwtZJQc4aphL31cWzPB4n5d6dgdbDxw&s',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Legs and Chest</Text>
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
        onPress={() => navigation.navigate('Day5Lean')}>
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

export default Day4Lean;

// This function was optimized with assistance from OpenAI's ChatGPT to handle state management more efficiently.

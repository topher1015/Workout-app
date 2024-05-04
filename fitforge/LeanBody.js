import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const LeanBody = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Plan Breakdown</Text>

      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZZJIk0tUXpMhwXMeGCVr0P903k1eVMmIyg&s',
        }}
        style={styles.image}
      />
      <Text style={styles.description}>
        Our detailed workout routines focusing on high intensity interval
        training to maximize fat loss. You will find plenty of cardio and ab
        workouts to promote that lean look.
      </Text>

      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwr7wjmzcPr8V9lsiefZrvxCiABj0BFybYsQ&s',
        }}
        style={styles.image}
      />
      <Text style={styles.description}>
        Nutrition plan will be to keep your food intake low but enough to press
        through each workout. Tailor it to your needs with out nutrition
        calculator provided.
      </Text>

      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTQ5rokTaDqtxu8nyrUzp2J1aXDTHJCiMJyA&s',
        }}
        style={styles.image}
      />
      <Text style={styles.description}>
        We will recommend supplements to help lean out and lose weight. Some
        great options include whey protein, fat burners, and creatine to
        maximize results.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Nutrition')}>
          <Text style={styles.navbuttonText}>Nutrition</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('LeanSched')}>
          <Text style={styles.navbuttonText}>Schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Day1Lean')}>
          <Text style={styles.navbuttonText}>Start Plan!</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.navContainer}>
        <TouchableOpacity
          style={[styles.button, { borderLeftWidth: 1 }]}
          onPress={() => navigation.navigate('Homepage')}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('WorkoutPlans')}>
          <Text style={styles.buttonText}>Workout Plans</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
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
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'blue',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 50,
  },
  navButton: {
    flex: 1, 
    paddingVertical: 15,
    paddingHorizontal: 10, 
    backgroundColor: '#007bff', 
    borderRadius: 5,
    marginBottom: 20,
    marginHorizontal: 5, 
  },
  navbuttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
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

export default LeanBody;

//Descriptons of the workouts with pictures, nutrition left out of navigation, more time would allow to add it but planned to be left out in favor of mvp

// This function was optimized with assistance from OpenAI's ChatGPT to handle state management more efficiently.

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Homepage = ({ navigation }) => { //navigation buttons at bottom found on most pages, profile is left out
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No Workout</Text>
      <Image
        style={styles.image}
        source={{
          uri: 'https://www.healthkart.com/connect/wp-content/uploads/2017/03/banner-2021-04-09T155210.357.jpg',
        }}
      />
      <Text style={styles.leftAlignedText}>No Workout, Day 0/0</Text>
      <TouchableOpacity
        style={styles.bigButton}
        onPress={() => navigation.navigate('WorkoutPlans')}>
        <Text style={styles.bigButtonText}>Begin</Text>
      </TouchableOpacity>

      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity
          style={styles.button}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blue',
    marginTop: 90,
  },
  image: {
    width: 350,
    height: 200,
    marginTop: -60,
  },
  leftAlignedText: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    fontSize: 16,
    marginTop: -60,
  },
  bigButton: {
    marginTop: 10,
    backgroundColor: '#007BFF', 
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5, 
    elevation: 2, 
  },
  bigButtonText: {
    fontSize: 18,
    color: '#ffffff', 
    fontWeight: 'bold',
  },
  bottomButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#c0c0c0',
  },
  button: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default Homepage;

//shows current workout and day of the week or workout period, for now only shows there is no workout and user goes through flow to start new plan for critical path, full blown app would keep track of where user is in their workout and let them pick up from there

// This function was optimized with assistance from OpenAI's ChatGPT to handle state management more efficiently.

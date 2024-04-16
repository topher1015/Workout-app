import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No Workout</Text>
      <Image
        style={styles.image}
        source={{ uri: 'https://www.healthkart.com/connect/wp-content/uploads/2017/03/banner-2021-04-09T155210.357.jpg' }}
      />
      <Text style={styles.leftAlignedText}>No Workout, Day 0/0</Text>
      <Button title="Begin" onPress={() => navigation.navigate('Homepage')} />
    
      <View style={styles.bottomButtonContainer}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('WorkoutPlans')}>
          <Text style={styles.buttonText}>Workout Plans</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
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
    fontSize: 36,
    fontWeight: 'bold',
    color: 'blue',
    marginTop: 160,
  },
  image: {
    width: 350,
    height: 200,
    marginTop: -80,
  },
  leftAlignedText: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    fontSize: 16,
    marginTop: -80,
  },
  bottomButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#c0c0c0',
  },
  button: {
    flex: 1, // Makes the buttons equally share the container's width
    paddingVertical: 15, // Adjust the padding as needed
    alignItems: 'center',
    backgroundColor: '#e0e0e0', // Gives a slight grey background to buttons
    borderColor: '#c0c0c0', // Border color to distinguish buttons
    borderWidth: 1, // Add a border width to connect the buttons visually
  },
  buttonText: {
    fontSize: 16,
  },
});

export default HomePage;

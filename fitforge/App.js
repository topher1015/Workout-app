// App.js
import React from 'react';
import { StyleSheet, View, Image, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './Homepage'; // Make sure the file is in the same directory
import WorkoutPlans from './WorkoutPlans'; // Import WorkoutPlans component
import WorkoutResults from './WorkoutResults'; // Import WorkoutResults component

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTextBold}>FitForge</Text>
      <Image
        source={{
          uri: 'https://hips.hearstapps.com/hmg-prod/images/fitness-coach-doing-push-ups-with-girls-in-gym-royalty-free-image-1624617521.jpg',
        }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.text}>
        Your Personal Workout Planner! Say hello to your new fitness guide with
        FitForge, the app that does all the dirty work and maps out your fitness
        journey. We curate personalized workout plans tailored to your goals and
        fitness levels, so you don’t have to. Fitness planning has never been
        easier or more exciting!
      </Text>
      <Button title="Begin" onPress={() => navigation.navigate('Homepage')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="WorkoutPlans" component={WorkoutPlans} />
        <Stack.Screen name="WorkoutResults" component={WorkoutResults} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 30,
  },
  headerTextBold: {
    fontWeight: 'bold',
    color: 'blue', // Example color
    fontSize: 36, // Example size
  },
  image: {
    width: 350,
    height: 250,
    marginTop: -20, // Adjust based on your layout
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default App;

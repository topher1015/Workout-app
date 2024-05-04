// App.js, import all needed components
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './Homepage'; 
import WorkoutPlans from './WorkoutPlans'; // Import WorkoutPlans component
import WorkoutResults from './WorkoutResults'; // Import WorkoutResults component
import ShreddedIn8 from './ShreddedIn8'; 
import LeanBody from './LeanBody'; 
import ShredSched from './ShredSched';
import LeanSched from './LeanSched';
import Day1Shred from './Day1Shred';
import Day2Shred from './Day2Shred';
import Day3Shred from './Day3Shred';
import Day4Shred from './Day4Shred';
import Day5Shred from './Day5Shred';
import Day6Shred from './Day6Shred';
import Day7Shred from './Day7Shred';
import Day1Lean from './Day1Lean';
import Day2Lean from './Day2Lean';
import Day3Lean from './Day3Lean';
import Day4Lean from './Day4Lean';
import Day5Lean from './Day5Lean';
import Day6Lean from './Day6Lean';
import Day7Lean from './Day7Lean';

function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerTextBold}>Fit Forge</Text>
      <Image
        source={{
          uri: 'https://hips.hearstapps.com/hmg-prod/images/fitness-coach-doing-push-ups-with-girls-in-gym-royalty-free-image-1624617521.jpg',
        }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.text}>
        Your Personal Workout Planner! Say hello to your new fitness guide with
        Fit Forge, the app that does all the dirty work and maps out your
        fitness journey. We curate personalized workout plans tailored to your
        goals and fitness levels, so you don’t have to. Fitness planning has
        never been easier or more exciting!
      </Text>
      <TouchableOpacity
        style={styles.bigButton}
        onPress={() => navigation.navigate('Homepage')}>
        <Text style={styles.bigButtonText}>Begin</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  //create navigation for button presses
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="WorkoutPlans" component={WorkoutPlans} />
        <Stack.Screen name="WorkoutResults" component={WorkoutResults} />
        <Stack.Screen name="ShreddedIn8" component={ShreddedIn8} />
        <Stack.Screen name="LeanBody" component={LeanBody} />
        <Stack.Screen name="ShredSched" component={ShredSched} />
        <Stack.Screen name="LeanSched" component={LeanSched} />
        <Stack.Screen name="Day1Shred" component={Day1Shred} />
        <Stack.Screen name="Day2Shred" component={Day2Shred} />
        <Stack.Screen name="Day3Shred" component={Day3Shred} />
        <Stack.Screen name="Day4Shred" component={Day4Shred} />
        <Stack.Screen name="Day5Shred" component={Day5Shred} />
        <Stack.Screen name="Day6Shred" component={Day6Shred} />
        <Stack.Screen name="Day7Shred" component={Day7Shred} />
        <Stack.Screen name="Day1Lean" component={Day1Lean} />
        <Stack.Screen name="Day2Lean" component={Day2Lean} />
        <Stack.Screen name="Day3Lean" component={Day3Lean} />
        <Stack.Screen name="Day4Lean" component={Day4Lean} />
        <Stack.Screen name="Day5Lean" component={Day5Lean} />
        <Stack.Screen name="Day6Lean" component={Day6Lean} />
        <Stack.Screen name="Day7Lean" component={Day7Lean} />
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
    paddingBottom: 60,
  },
  headerTextBold: {
    fontWeight: 'bold',
    color: 'blue',
    fontSize: 36,
  },
  image: {
    width: 350,
    height: 250,
    marginTop: 0,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
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
    textAlign: 'center',
  },
});

export default App;

// This function was optimized with assistance from OpenAI's ChatGPT to handle state management more efficiently.

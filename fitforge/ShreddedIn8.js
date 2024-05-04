import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
const ShreddedIn8 = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Plan Breakdown</Text>

      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJP4k3flhKJuh5dLpJLdE4AF8rm92uD_BU4g&s',
        }}
        style={styles.image}
      />
      <Text style={styles.description}>
        These detailed workout routines focusing on high intensity interval
        training to maximize fat loss while maintaining muscle. Feel the burn
        with an 8 week program to hit your goals.
      </Text>

      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWvmX1F7Hpr1WLRaXfxBQAd4frVoT2rh-zqQ&s',
        }}
        style={styles.image}
      />
      <Text style={styles.description}>
        Nutrition plan tailored to support muscle recovery and growth while
        promoting fat loss.
      </Text>

      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3G2hlOzNRZLN_AXqrDOdpWJCHCy0iU-Ywyg&s',
        }}
        style={styles.image}
      />
      <Text style={styles.description}>
        Recommended supplements including whey protein, BCAAs, and pre-workouts
        to enhance your results.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Nutrition')}>
          <Text style={styles.navbuttonText}>Nutrition</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('ShredSched')}>
          <Text style={styles.navbuttonText}>Schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Day1Shred')}>
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

export default ShreddedIn8;

//Plan description and overview with pictures, nutrition at the bottom left out of code, mvp was the mail goal

// This function was optimized with assistance from OpenAI's ChatGPT to handle state management more efficiently.

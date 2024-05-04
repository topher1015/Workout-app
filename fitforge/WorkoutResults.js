import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WorkoutResults = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.flexContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Workout Plans</Text>

        <Text style={styles.subHeader}>Shredded in 8 Weeks</Text>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTow0aUOv9NzEtW4caZ-3NO5fkAsMRZQGt8BQ&s',
          }}
          style={styles.image}
        />
        <Text style={styles.description}>
          This 8-week program is designed to cut body fat and enhance muscle
          definition. It will push you to be the best you can be and get the
          results you want.
        </Text>
        <Button
          title="Let's Shred"
          onPress={() => navigation.navigate('ShreddedIn8')}
        />

        <Text style={styles.subHeader}>Lean Body</Text>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5RTcIZkwUszUIevd_ASr138H4xi6RYH3FEg&s',
          }}
          style={styles.image}
        />
        <Text style={styles.description}>
          Focus on toning and sculpting your body with this balanced fitness
          routine. Extra time will be put in for cardio and abs to look your
          leanest.
        </Text>
        <Button
          title="Lean Out"
          onPress={() => navigation.navigate('LeanBody')}
        />

        <View style={styles.navContainer}>
          <Button title="Home" onPress={() => navigation.navigate('Home')} />
          <Button
            title="Workout Plans"
            onPress={() => navigation.navigate('WorkoutPlans')}
          />
          <Button
            title="Profile"
            onPress={() => navigation.navigate('Profile')}
          />
        </View>
      </ScrollView>

      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity
          style={[styles.bottomButton, { borderLeftWidth: 0 }]}
          onPress={() => navigation.navigate('Homepage')}>
          <Text style={styles.bottomButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => navigation.navigate('WorkoutPlans')}>
          <Text style={styles.bottomButtonText}>Workout Plans</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.bottomButtonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blue',
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 250,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 70,
    width: '100%',
  },
  bottomButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bottomButton: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderColor: '#c0c0c0',
    borderWidth: 1,
    borderLeftWidth: 1, 
  },
  bottomButtonText: {
    fontSize: 16,
  },
});

export default WorkoutResults;

//Options and descriptions of available programs to choose from, full blown app will have more to choose from

// This function was optimized with assistance from OpenAI's ChatGPT to handle state management more efficiently.

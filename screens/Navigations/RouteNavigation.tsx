import { StyleSheet, Text, View, StatusBar  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Splash from '../SplashScreen/Splash';
import Introduction1 from '../Introduction/Introduction1';
import Introduction2 from '../Introduction/Introduction2';
import Introduction3 from '../Introduction/Introduction3';
import EMICalculator from '../Emi/EMICalculator';


// Define your screens as separate components
// const SplashScreen = () => (
//   <View style={styles.container}>
//     <Text>Welcome to the App!</Text>
//   </View>
// );

// const HomeScreen = () => (
//   <View style={styles.container}>
//     <Text>This is the Home Screen</Text>
//   </View>
// );

// const DetailsScreen = () => (
//   <View style={styles.container}>
//     <Text>Details Screen</Text>
//   </View>
// );

// Create the Stack Navigator
const Stack = createNativeStackNavigator();

const RouteNavigation = () => {
  return (
    <>
    <NavigationContainer>
    <StatusBar hidden={true} />
       <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }} // Hide the header
        />
        <Stack.Screen
          name="Introduction1"
          component={Introduction1}
          options={{ headerShown: false }} // Hide the header
        />
        <Stack.Screen
          name="Introduction2"
          component={Introduction2}
          options={{ headerShown: false }} // Hide the header
        />
        <Stack.Screen
          name="Introduction3"
          component={Introduction3}
          options={{ headerShown: false }} // Hide the header
        />
        <Stack.Screen
         name="EMICalculator"
         component={EMICalculator}
         options={{headerShown: false}}
         />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

export default RouteNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { HEIGHT, WIDTH } from "../Helpers/Dimentions";
import {IMAGEPATH} from "../assests/themes";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Introduction1'); // Navigate to the main screen after 3 seconds
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={IMAGEPATH.LogoMain} // Make sure to add your logo image
        style={styles.logo}
      />
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#011e31',
  },
  logo: {
      height: HEIGHT * 1.15,
      width: WIDTH * 2.27,
      resizeMode: "contain",
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default SplashScreen;
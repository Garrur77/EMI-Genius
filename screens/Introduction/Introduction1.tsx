import { StyleSheet, Button, Text, View, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import { HEIGHT, WIDTH } from '../Helpers/Dimentions';
import React from 'react';
import { IMAGEPATH } from '../assests/themes';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const Introduction1 = () => {
  const navigation = useNavigation(); // Initialize navigation

  return (
    <ScrollView>
    <ImageBackground source={IMAGEPATH.Iback1} style={styles.container}>
      <Image source={IMAGEPATH.IIcon1} style={styles.icon} />
      <View style={styles.overlay}>
        <Text style={styles.title}>
          Monitor and Track Your{' '}
          <Text style={{ color: '#3a6d8c', fontSize: 36, fontWeight: 'bold' }}>Spending</Text>
        </Text>
        <Text style={styles.description}>
          Providing a clear picture of your financial habits and helping you make informed decisions about your money.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EMICalculator')}>
          <Text style={styles.buttonText}>Next</Text>
         
        </TouchableOpacity>
      </View>
    </ImageBackground>
    </ScrollView>
  );
};

export default Introduction1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
   backgroundColor:'#0e194d'
  },
  overlay: {
    backgroundColor: '#ffff',
    //height:25,
    padding: 30,
    marginBottom:1,
    marginTop:75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderWidth:2,
    borderColor:'#0e194d'
  },
  icon: {
    width: 350,
    height: 350,
    marginBottom: '1%',
    marginTop:90,
    paddingTop: 150,
    alignSelf: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#0e194d',
    marginBottom: 10,
  },
  description: {
    fontSize: 20,
    color: '#000080',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#3a6d8c',
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
    width: 135,
    height: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight:'bold',
    paddingBottom: 6,
    margin: 2,
  },
});

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert, Image, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { HEIGHT, WIDTH } from "../Helpers/Dimentions";
import {IMAGEPATH} from "../assests/themes";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 12 / 100;
    const tenure = parseInt(loanTenure) * 12;

    if (isNaN(principal) || isNaN(rate) || isNaN(tenure) || principal <= 0 || rate <= 0 || tenure <= 0) {
      Alert.alert('Invalid Input', 'Please fill all fields with valid numeric values.');
      return;
    }

    const emiValue = (principal * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
    const totalAmount = emiValue * tenure;
    const interestAmount = totalAmount - principal;

    setEmi(emiValue.toFixed(2));
    setTotalInterest(interestAmount.toFixed(2));
    setTotalPayment(totalAmount.toFixed(2));
  };

  // Get screen width to make logo responsive
  const screenWidth = Dimensions.get('window').width;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header with Logo */}
      <View style={styles.header}>
        <Image
          source={IMAGEPATH.LogoMain}// Replace with your logo URL or local path
          style={[styles.logo, { width: screenWidth * 1.2, height: screenWidth * 1.4}]} // Responsive width and height
        />
      </View>
      
      <View style={styles.secondtittle}>
      <Text style={styles.title}>EMI Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Loan Amount"
        keyboardType="numeric"
        value={loanAmount}
        onChangeText={setLoanAmount}
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Interest Rate (Annual)"
        keyboardType="numeric"
        value={interestRate}
        onChangeText={setInterestRate}
        placeholderTextColor="#aaa"
      />
      <TextInput
        style={styles.input}
        placeholder="Loan Tenure (Years)"
        keyboardType="numeric"
        value={loanTenure}
        onChangeText={setLoanTenure}
        placeholderTextColor="#aaa"
      />
      {/* Interactive Button */}
      <TouchableOpacity style={styles.button} onPress={calculateEMI}>
        <Text style={styles.buttonText}>Calculate EMI</Text>
      </TouchableOpacity>
    </View>  
    
    <View style={styles.resultContainer}>
        <Text style={styles.resultText}>EMI: ₹{ emi } per/months</Text>
        <Text style={styles.resultText}>Total Interest: ₹{totalInterest}</Text>
        <Text style={styles.resultText}>Total Payment: ₹{totalPayment}</Text>
      </View>

      {/* Pie Chart */}
      <PieChart
        data={[
          { name: 'Principal', population: parseFloat(loanAmount) || 0, color: '#4CAF50', legendFontColor: '#fff', legendFontSize: 15 },
          { name: 'Interest', population: parseFloat(totalInterest) || 0, color: '#F44336', legendFontColor: '#fff', legendFontSize: 15 },
        ]}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: '#333',
          backgroundGradientFrom: '#333',
          backgroundGradientTo: '#333',
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          strokeWidth: 2,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent:'flex-start',
    backgroundColor: '#2c3e50',  // Dark theme background
  },
  header: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', 
    marginTop: 0, 
    marginBottom:1,
    paddingTop:10,
    position:'relative',
   // paddingTop:0,
   //backgroundColor: '#f8f8f8',
    //boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
},
logo: {
 // height: 'auto',
  //width: 150,
  resizeMode: 'contain',
 position:'absolute',
  top:-190,
  marginTop: 0,
  marginBottom: 0,
  },
  secondtittle:{
    marginTop:130,
    marginBottom:20,

  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:10,
    marginBottom: 20,
    padding: 5,
    color: '#ecf0f1', // Lighter color for text
  },
  input: {
    borderWidth: 2,
    borderColor: '#34495e',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    fontSize: 16,
    backgroundColor: '#34495e',
    color: '#ecf0f1',
  },
  button: {
    backgroundColor: '#3498db', // Interactive button color
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
    elevation: 3, // Shadow effect for Android
  },
  buttonText: {
    color: '#fff',  // White text on button
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
    color: '#ecf0f1',  // Lighter text color
  },
});

export default EMICalculator;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  TextInput

} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const styles = StyleSheet.create({
  title:{
    fontSize: 30,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }, 

  label:{
    alignItems: 'center',
    justifyContent:'center'
  },
  
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    padding: 5,
    margin: 10
  },

  btnStyle: {
    width: 200,
    color: 'green',
    padding: 10,
    margin: 10
  }
})




const App = () => {
  const [weightText, setWeight] = useState('');
  const [heightText, setHeight] = useState('');
  const [bmi, setBmi] = useState('')

  console.log(heightText)

  function calcBMI() {
    let height = heightText/100
    let bmi = weightText/(height*height)
    setBmi(bmi)

  };

  return(
    <View style={styles.container}>

      <SafeAreaView> 
        
        <Text style={styles.title}> BMI Calculator </Text>
        <Text style={
          {
            marginTop: 50,
            paddingLeft: 80
          }
        }> Height </Text>
        
        <TextInput style ={styles.input} //TextInput is a self closing component
          placeholder = 'Enter height in cm' 
          onChangeText={(heightText) => setHeight(heightText)}
          keyboardType = 'decimal-pad'
        />

        <Text style={
          {
            marginTop: 50,
            paddingLeft: 80
          }
        }> Weight </Text>

        <TextInput 
          style ={styles.input} //TextInput is a self closing component
          placeholder = 'Enter weight in kg'
          onChangeText={(weightText) => setWeight(weightText)}
          keyboardType = 'decimal-pad'
        />

        <Button
          title="Calculate"
          color= '#F96E46'
          accessibilityLabel= "Learn more about button"
          onPress = {calcBMI}
        >
        </Button>

        <Text style={styles.input}>
          You're calculated BMI is : {bmi.toPrecision(3)}
        </Text> 
      </SafeAreaView> 
      
    </View>
  )
}

export default App;

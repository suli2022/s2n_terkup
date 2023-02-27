import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

export default function App() {
  const [radius, setRadius] = useState('');
  const [height, setHeight] = useState('');
  const [volume, setVolume] = useState('');

  function calcVolume() {
    let localVolume = 1.0/3.0 * Math.pow(radius, 2) * 
    Math.PI * height;
    console.log(localVolume)
    setVolume(localVolume);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.about}>Nagy János, Szoft II N, 2023-02-27</Text>
      
      <Text style={styles.titles}>Feladat 0301 megoldása</Text>
      <Text style={styles.titles}>Kúp térfogatának számítása</Text>

      <Text>Sugár</Text>
      <TextInput 
      style={styles.inputField}
      onChangeText={  (data) => setRadius(data)   }/>

      <Text>Magasság</Text>
      <TextInput 
      style={styles.inputField}
      onChangeText={  (data) => setHeight(data)   }/>

      <TouchableHighlight
      style={styles.button}
      onPress={calcVolume}>
        <Text style={styles.buttonText}>Számít</Text>
      </TouchableHighlight>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField: {
    backgroundColor: 'white',
    width: '90%',
    height: 30
  },
  button: {
    backgroundColor: 'navy',
    width: '90%',
    padding: 5,
    marginTop: 10,
    borderRadius: 3,
    textAlign: 'center'
  },
  buttonText: {
    color: 'white'
  },
  about: {
    backgroundColor: 'gold',
    padding: 3,
    borderRadius: 3
  },
  titles: {
    marginTop: 5,
    marginBottom: 10
  }
});

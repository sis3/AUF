import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// orange-8FC9         21B29HY52TE

// orange-2351         9E6QEYLY5MM

export default function App() {

  const [phone, setPhone] = useState('')

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if(value !== null) {
        setPhone(JSON.parse(value))
      }
    } catch(e) {
        console.log(e, 'log: Erreurs pendant la lecture !')
    }
  }

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('@storage_Key')
      alert('Supprimer !')
    } catch(e) {
        console.log(e, 'log: Erreurs pendant la suppression !')
    }
    console.log('Done.')
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Read Data</Text>
      <Text>-------------</Text>

      <Text>{ phone }</Text>
      <Text>-------------</Text>

      <Button  
        onPress={() => getData()}
        title="Get Data" />

      <Text>-------------</Text>

      <Button  
        onPress={() => removeData()}
        title="Remove Data" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8CF1B4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
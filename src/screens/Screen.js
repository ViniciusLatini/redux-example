import React from 'react';
import {View,Text,TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import {useSelector} from 'react-redux';

const Screen = () => {
  const navigation = useNavigation();
  const {count} = useSelector(store => store?.counter)
  return(
    <View style={styles.container}>
      <Text style={styles.header}>Contador</Text>
      <Text style={styles.counter}>{count}</Text>
      <TouchableOpacity style={styles.button} onPress={() => {navigation.goBack()}}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  counter: {
    marginTop: 20,
    fontSize: 18
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: "#ae2",
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: "center",
    marginTop: 40
  },
  buttonText: {
    color: '#fff'
  }
})

export default Screen;
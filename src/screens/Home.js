import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';

import {addCounter} from '../store/counter/counterAction';



const Home = () => {
  const {count} = useSelector(store => store?.counter)
  const navigation = useNavigation();
  const dispatch = useDispatch();

  function add() {
    dispatch(addCounter(count));
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contador</Text>
      <Text style={styles.counter}>{count}</Text>
      <TouchableOpacity onPress={add}style={styles.button}>
        <Text style={styles.buttonText}>Aumentar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("Screen")}}>
        <Text style={styles.buttonText}>Navegar</Text>
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
    color: '#fff',

  }
})

export default Home;
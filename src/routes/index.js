import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Screen from '../screens/Screen';

const Stack = createStackNavigator();

function Routes() {
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen 
        name="Home"
        component={Home}
      />

      <Stack.Screen 
        name="Screen"
        component={Screen}
      />
    </Stack.Navigator>
  );
}

export default Routes;
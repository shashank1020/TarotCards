/**
 * React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import TarotCards from './src/TarotCards';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import About from './src/About.tsx';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen
          name={'Home'}
          component={TarotCards}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'About'}
          component={About}
          options={{
            headerStyle: {backgroundColor: '#35369e'},
            headerTitleStyle: {color: 'white'},
            headerBackButtonDisplayMode: 'minimal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

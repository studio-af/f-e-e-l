/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FeelerHome from './src/screens/FeelerHome.js';
import StoryScreen from './src/screens/StoryScreen.js';
import FeelerHomeCopy from './src/screens/FeelerHomeCopy.js';
// import FeelerScreen from "./src/screens/FeelerScreen.js";

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer style = {styles.container}>
        <Stack.Navigator>
          <Stack.Screen
              name="Home"
              component={FeelerHome}
              options={{ title: '' }}
          />
          <Stack.Screen name="Feel Smarter" component={StoryScreen} options={{ title: '' }}/>
          <Stack.Screen name="Feeler" component={FeelerHome} options={{ title: '' }} />
           <Stack.Screen name="FeelerCopy" component={FeelerHomeCopy} options={{ title: '' }} />
        </Stack.Navigator>
      </NavigationContainer>

  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
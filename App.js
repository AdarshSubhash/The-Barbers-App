import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import LoginScreen from './screens/loginscreen';
import {AppTabNavigator} from './components/AppTabNavigator';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Customerhomescreen from './screens/customer';



export default function App() {
  return (
    <View style={styles.container}>
    <Appcontainer/>
    </View>
  );
}

const switchnavigator=createSwitchNavigator({
LoginScreen:{screen:LoginScreen},
BottomTab:{screen:AppTabNavigator},
Customerhomescreen:{screen:Customerhomescreen}
})

const Appcontainer=createAppContainer(switchnavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

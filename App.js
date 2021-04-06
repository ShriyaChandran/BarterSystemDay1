import * as React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import SignupLoginScreen from './screens/SignupLoginScreen';
import {AppTabNavigator} from './components/AppTabNavigator';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}
const switchNavigator = createSwitchNavigator({
  SignupLoginScreen: {screen:SignupLoginScreen},
  BottomTab:{screen:AppTabNavigator}
})

const AppContainer = createAppContainer(switchNavigator);
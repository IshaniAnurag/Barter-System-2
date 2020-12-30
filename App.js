import * as React from 'react';
import {Text,View,TouchableOpacity,Stylesheet} from 'react-native';
import SignupLoginScreen from './screens/SignupLoginScreen';

export default class App extends React.Component{
  render(){
    return(
      <View>
      <SignupLoginScreen/>
      </View>
    )
  }
}
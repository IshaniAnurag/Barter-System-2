import * as React from 'react';
import {Text,View,Button,StyleSheet,TouchableOpacity, ScrollView,TextInput, Modal, KeyboardAvoidingView}from 'react-native';
import firebase from 'firebase';


export default class SignupLoginScreen extends React.Component{
  constructor(){
      super();
      this.state={
          email:'',
          password:'',
          FirstName:'',
          LastName:'',
          Address:'',
          Contact:'',
          ConfirmPassword:'',
          IsModalVisible:'false'
      }
  }
  showModal=()=>{
    return(
      <Modal
animationType="fade"
transparent={true}
visible={this.state.IsModalVisible}

      >
<ScrollView style={{width:'100%'}}>

<KeyboardAvoidingView>

  <Text>REGISTRATION FORM</Text>
  <TextInput style={styles.textInput}
  placeholder="First Name"
  maxLength={12}
  onChangeText={(text)=>{
    this.setState({
      FirstName:text
    })
  }}/>
  <TextInput style={syles.textInput}
  placeholder="Last Name"
  maxLength={12}
  onChangeText={(text)=>{
    this.setState({
      LastName:text
    })
  }}/>
  <TextInput style={styles.textInput}
  placeholder="Contact No."
  maxLength={10}
  keyboardType="numeric"
  onChangeText={(text)=>{
    this.setState({
      Contact:text
    })
  }}/>
  <TextInput style={styles.textInput}
  placeholder="Address"
  multiline={true}
  onChangeText={(text)=>{
    this.setState({
      Address:text
    })
    
  }}/>
  <TextInput style={styles.textInput}
  placeholder="Email"
  keyboardType="email-address"
  onChangeText={(text)=>{
    this.setState({
      email:text
    })
  }}/>
  <TextInput style={styles.textInput}
  placeholder=" Create PassWord"
  secureTextEntry={true}
  onChangeText={(text)=>{
    this.setState({
      password:text
    })
  }}/>
  <TextInput style={styles.textInput}
  placeholder=" Confirm PassWord"
  secureTextEntry={true}
  onChangeText={(text)=>{
    this.setState({
      ConfirmPassword:text
    })
  }}/>

  <TouchableOpacity style={{color:"green",height:10,width:15,border:'solid'}}
  onPress={()=>{this.UserSignUp(this.state.email,this.state.password,this.state.ConfirmPassword)}}
  >
     <Text style={{fontSize:20,color:"orange"}}>SUBMIT</Text>
  </TouchableOpacity>
  <TouchableOpacity style={{color:"red",height:10,width:15,border:'solid'}}
  onPress={()=>{this.setState({"IsModalVisible":false})}}>
    <Text style={{fontSize:20,color:"yellow"}}>CANCEL</Text>
  </TouchableOpacity>

</KeyboardAvoidingView>
</ScrollView>
</Modal>
    )}

import * as React from 'react';
import {View, Text, TextInput, Alert, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Modal, ScrollView} from 'react-native';
import db from '../config';
import firebase from 'firebase';


export default class SignupLoginScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId:'',
            password:'',
            confirmPassword:'',
            first_name:'',
            last_name:'',
            isModalVisible:'',
            contact:'',
            address:''

        }
    }

    userSignup = (emailId, password, confirmPassword) =>{
        if(password!=confirmPassword){
            alert('Password does not match.')
        }
        else{  
            firebase.auth().createUserWithEmailAndPassword(emailId, password)
            .then(()=>{
                db.collection('users').add({
                    first_name : this.state.firstName,
                    last_name : this.state.lastName,
                    contact : this.state.contact,
                    email_id : this.state.emailId,
                    address : this.state.address
                })
                alert('user added successfully');
                this.setState({
                    isModalVisible:false
                })
            })
        .catch(error=>{
            alert(error.code, error.message)
        })  
    }
    }

    userLogin = (emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
            this.props.navigation.navigate('Donate items')
        })
        .catch((error)=>{
            alert(error.code, error.message)
        })
    }

    showModal=()=>{
        return(
            <Modal visible={this.state.isModalVisible} transparent={true} animationType="fade">
                <View>
                    <ScrollView>
                        <KeyboardAvoidingView>
                            <Text style={styles.modalTitle}>REGISTRATION</Text>
                            <TextInput
                               style={styles.formTextInput}
                               placeholder = {"First Name"}
                               maxLength = {15}
                               onChangeText = {(text)=>{this.setState({
                                   firstName: text
                               })}}
                            />
                            <TextInput
                             style={styles.formTextInput}
                             placeholder = {"Last Name"}
                             maxLength = {15}
                             onChangeText = {(text)=>{this.setState({
                                 lastName : text
                             })}}
                            />
                            <TextInput
                            style={styles.formTextInput}
                            placeholder = {"contact"}
                            maxLength = {10}
                            keyboardType = {'numeric'}
                            onChangeText = {(text)=>{this.setState({
                                contact: text
                            })}}
                            />
                            <TextInput
                            style={styles.formTextInput}
                            placeholder = {"address"}
                            onChangeText = {(text)=>{this.setState({
                                address: text
                            })}}
                            />
                            <TextInput
                             style={styles.formTextInput}
                             placeholder ={"emailId"}
                             keyboardType = {'email-address'}
                             onChangeText = {(text)=>{this.setState({
                                 emailId : text
                             })}}
                            />
                            <TextInput
                             style={styles.formTextInput}
                             placeholder ={"password"}
                             secureTextEntry = {true}
                             onChangeText = {(text)=>{this.setState({
                                 password : text
                             })}}
                            />
                            <TextInput
                            style={styles.formTextInput}
                            placeholder ={"confirmPassword"}
                            secureTextEntry = {true}
                            onChangeText = {(text)=>{this.setState({
                                confirmPassword : text
                            })}}
                            />
                            <View style={styles.registerButton}>
                                <TouchableOpacity
                                    onPress={()=>{
                                        this.userSignUp(this.state.emailId, this.state.password, this.state.confirmPassword)
                                    }}>
                                    <Text style={styles.registerButtonText}> Register</Text>
                                </TouchableOpacity>
                            </View>

                            <View>
                                <TouchableOpacity style={styles.button}
                                onPress={()=>{this.setState({
                                    isModalVisible:false
                                })}}>
                                    <Text style={styles.registerButtonText}> Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </Modal>
        )
    }

    render(){
        return(
        <View style={styles.container}>
            {
                this.showModal()
            }
            <View>
                <Text>
                    Barter System App :)
                </Text>
            </View>
            <View>
                <TextInput
                    placeholder="abc@example.com"
                    keyboardType="email-address"
                    onChangeText={(text)=>{
                        this.setState({
                            emailId:text
                        })
                    }}
                />

                <TextInput
                    placeholder="Enter password"
                    secureTextEntry={true}
                    onChangeText={(text)=>{
                        this.setState({
                        password:text
                        })
                    }}
                />
                <TouchableOpacity style={styles.button}
                onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)}}>
                    <Text style={styles.buttonText}> Login </Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.button}
                onPress={()=>{
                    console.log(this.state.isModalVisible)
                    this.setState({
                        isModalVisible:true 
                    })
                    console.log(this.state.isModalVisible)
                }}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                
            </View>
        </View>
        );
    }
} 

const styles= StyleSheet.create({
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"#00B9F6",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        }
    },
    buttonText:{
        color:'#0031e7',
        fontWeight:'200',
        fontSize:20
      },
    container:{
        flex:1,
        backgroundColor:'#CBE2F1',
        alignItems: 'center',
        justifyContent: 'center'
    }

})
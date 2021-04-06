import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity,TextInput,KeyboardAvoidingView} from 'react-native';
import firebase from 'firebase';
import db from '../config';
import {MyHeader} from '../components/MyHeader';

export default class  DonteScreen extends React.Component{
    constructor(){
        super();
        this.state={
            userId: firebase.auth().currentUser.email,
            name: "",
            reasonToRequest:""
        }
    }
    createUniqueId(){
        return Math.random().toString(36).substring(7);
    }
    addRequest=(name,reasonToRequest)=>{
        var userId= this.state.userId;
        var randomRequestId= this.createUniqueId();
        db.collection('requested_item').add({
            "user_id": userId,
            "item_name":name,
            "reason_to_request": reasonToRequest,
            "request_id": randomRequestId
        })
        this.setState({
            name:'',
            reasonToRequest: ''
        })
        alert("item requested successfully!")
    }

    render(){
        return(
            <View style={{flex:1}}>
                        <MyHeader title="Request Item" navigation ={this.props.navigation} />
                    <KeyboardAvoidingView style= {styles.keyBoardStyle}>
                        <TextInput 
                            style={styles.formTextInput} 
                            placeholder="Enter item name" 
                            value ={this.state.name}
                            onChangeText={(text)=>{this.setState({name: text})}}/>
                        <TextInput style={[styles.formTextInput, {height:300}]}
                            placeholder="Why do you want the item?"
                            multiline
                            numberOfLines ={8}
                            value={this.state.reasonToRequest}
                            onChangeText={(text)=>{this.setState({reasonToRequest: text})}}
                        />
                        <TouchableOpacity style={styles.button} onPress={()=>{
                            this.addRequest(this.state.name,this.state.reasonToRequest)
                        }}>
                            <Text> Add request</Text>
                        </TouchableOpacity>

                    </KeyboardAvoidingView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
      },
    }
  )
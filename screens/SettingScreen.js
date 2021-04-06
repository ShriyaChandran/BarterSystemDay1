import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {MyHeader} from '../components/MyHeader';
import db from '../config';
import firebase from 'firebase';

export default class App extends React.Component{
    constructor(){
        super();
        this.state={
            emailId:'',
            firstName:'',
            lastName:'',
            contact:'',
            address:'',
            docId:''
        }
    }
    
    getUserDetails
}
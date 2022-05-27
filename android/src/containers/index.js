import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import NavigatorBottom from './NavigatorBottom'
import SignIn from '../screens/Dangnhap'
const stack = createStackNavigator()
export default class Containers extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <stack.Navigator 
                screenOptions={{headerShown :false}}
                
            >
                <stack.Screen name='SignIn' component={SignIn}/>
                <stack.Screen name = "Bottom_Navigator" component={NavigatorBottom}/>
            </stack.Navigator>
        )
    }
}
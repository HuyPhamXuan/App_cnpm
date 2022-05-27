import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import BoxList  from '../components/BoxList'
import Header from '../components/Header'
const arr = [1,2,3,4,5,6,7,8,9,10,11]
export default class Notification extends Component{
    render(){
        return(
            <>
            <Header
                center = { <Text style = {{ fontSize: 20, color:"white"}}>Thông báo</Text>}
            >

            </Header>
            <View style = {{flex:1, backgroundColor:"#D3D3D3"}}>
                <ScrollView>
                    {
                        arr.map((value, idx)=>{
                            if ( idx % 2 === 0 ) {
                                return(
                                    <BoxList color = "#99FFFF"></BoxList>
                                )
                            } else {
                                return(
                                    <BoxList color = "#FFFFF0"></BoxList>
                                ) 
                            }

                        })
                    }
                </ScrollView>
            </View>
            </>
        )
    }
}
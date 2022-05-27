import React, { Component } from "react"
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from "react-native"
import Ionicons  from 'react-native-vector-icons/Ionicons'
const { width, height } = Dimensions.get("window")
export default class BoxList extends Component{
    render(){
        return(
            <>
            <TouchableOpacity style = { [styles.box, {backgroundColor: this.props.color}] }>
                <View style = { styles.boxavt }>
                    <Ionicons name = "logo-twitch" size={50}/>
                </View>
                <View style = { styles.boxtext }>
                    <Text style={{marginRight:10}}>Không gian triển lãm, trải nghiệm của sự kiện Ngày sách và Văn hóa đọc Việt Nam được trang trí công phu tại phố đi bộ Nguyễn Huệ (quận 1, TP.HCM).</Text>
                </View>
            </TouchableOpacity>
            </>
        )
    }
}
var styles = StyleSheet.create({
    box: {
        width: width,
        height: width/5,
        flexDirection: "row",
    },
    boxavt:{
        width: width/6 + 5,
        justifyContent:"center",
        alignItems:"center",
    },
    boxtext:{
        width: width - width/6 - 5,
        justifyContent:"center",
        marginLeft :7
    }
})
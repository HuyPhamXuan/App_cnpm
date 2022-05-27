import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, TextInput, ScrollView } from 'react-native'
import Header from "../components/Header"
import Line from '../components/Line'
import Ionicons  from 'react-native-vector-icons/Ionicons'
const { width, height } = Dimensions.get("window")
export default class DoiMatKhau extends Component{
    render(){
        return(
            <>
            <Header
                left = {
                <TouchableOpacity
                    onPress={()=>{this.props.navigation.goBack()}}
                >
                    <Ionicons name ="chevron-back-outline" size={35} color = {"white"}/>
                </TouchableOpacity>
                
               }
               center = {<Text style ={{ fontSize:20, color:"white"}}>Mật Khẩu</Text>}
            >               
            </Header>
            <View style = { styles.box }>
                    <View style = { styles.box_text } >
                        <View style = {{ flexDirection: "row", flex: 1, alignItems:"center"}}>
                            <View style = {{ flex:1 }}>
                                <Ionicons name='golf-sharp' size={30}/>
                            </View>
                            <View style = {{ flex: 7}}>
                                <Text style ={{ fontSize: 16, color:"black", fontStyle:"italic"}}>Mẹo chọn mật khẩu</Text>
                            </View>
                        </View>
                        <View style = {{ flex: 3, flexDirection:"row", }}>
                            <View style = {{flex:1}}></View>
                            <View style = {{ flex:8}}>
                                <Text>• Chọn mật khẩu mà bạn chưa dùng ở nơi nào khác trên mạng</Text>
                                <Text>• Hãy chọn mật khẩu dễ nhớ nhưng khó đoán với người khác</Text>
                                <Text>• Đừng chia sẻ mật khẩu với bất kỳ ai</Text>
                            </View>
                        </View>
                    </View>
                    <View style = { styles.box_input }>
                        <View style ={{ width: 50, backgroundColor: "white", alignItems:"center"}}>
                            <Ionicons name ="ios-shield-outline" size={30}/>
                        </View>
                        <TextInput
                            style = { styles.text_input }
                            onChangeText = {(text)=>{
                                this.onChangeCMND(text)
                            }}
                            placeholder = "Nhập mật khẩu cũ"
                        />
                    </View>
                    <View style = { styles.box_input }>
                        <View style ={{ width: 50, alignItems:"center"}}>
                            <Ionicons name ="ios-key-outline" size={30}/>
                        </View>
                        <TextInput
                            style = { styles.text_input }
                            onChangeText = {(text)=>{
                                this.onChangeCMND(text)
                            }}
                            placeholder = "Nhập mật khẩu mới"
                        />
                    </View>
                    <View style = { styles.box_input }>
                        <View style ={{ width: 50, backgroundColor: "white", alignItems:"center"}}>
                            <Ionicons name ="ios-key-outline" size={30}/>
                        </View>
                        <TextInput
                            style = { styles.text_input }
                            onChangeText = {(text)=>{
                                this.onChangeCMND(text)
                            }}
                            placeholder = "Nhập lại mật khẩu mới"
                        />
                    </View>
                    <View style = { styles.box_button }>
                        <TouchableOpacity
                            style = { styles.button }
                            onPress = {() =>{
                                //this.signIn()
                                if ( this.state.sign_in === 1) {
                                    this.props.navigation.navigate("Bottom_Navigator")
                                }
                            }}
                        >
                            <Text style ={{ color: "white", fontSize: 20}}>Đổi mật khẩu</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </>
        )
    }
}
var styles = StyleSheet.create({
    screen:{
        height: height - 200
    },
    box:{
        width: width,
        height: 410,
        marginTop: 20
    },
    box_text:{
        
        height:140,
        justifyContent:"center",
        alignItems: "center",
        width:width - 40,
        marginLeft: 20,
        borderWidth:0.2,
        borderRadius: 3,
        backgroundColor: "#D3D3D3"


    },
    box_input:{
        marginTop: 15,
        height:40,
        justifyContent:"center",
        alignItems:"center",
        width: width - 40,
        marginLeft: 20,
        flexDirection:"row",
        borderWidth: 0.3,
        borderRadius:3,
        backgroundColor:"white"
    },
    box_button:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginTop:10
    },
    text_input:{
        height: 39,
        width: width - 91,
        backgroundColor: "white",
        borderRadius:3,
    },
    text_input2:{
        height: 39,
        width: width - 91,
        backgroundColor: "white",
        borderRadius:3,
    },
    text1:{
        fontSize: 16,
        marginLeft: 60,
        bottom:-7
    },
    text2:{
        fontSize: 16,
        marginLeft: 60,
        bottom: -7
    },
    button:{
        height:45,
        width: width - 230,
        backgroundColor:"#FF4500",
        justifyContent: "center",
        alignItems: "center"
    }
})
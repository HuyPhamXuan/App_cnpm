import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions, TextInput } from 'react-native'
import Header from "../components/Header"
import Line from '../components/Line'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import { Picker } from '@react-native-picker/picker'
const { width, height } = Dimensions.get("window")
class LichHen extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            
            <View 
                style ={styles.box_lichhen}
            >
                <View style ={ styles.box_img }>
                    <Ionicons name = "alarm-sharp" size={50}/>

                </View>
                <View style = { styles.box_text }>
                    <View style = {styles.box_title}>
                        <Text style = {{fontSize: 18, color :"black"}}>{this.props.value.title}</Text>
                    </View>
                    <View style = {styles.sub_line}></View>
                    <View style ={styles.box_2}>
                        <View style = {styles.box_sub_21}>
                            <Text style ={{fontStyle:"italic", color:"black"}}>Ngày hẹn: </Text>
                            <Text>{this.props.value.ngay_hen}</Text>
                        </View>
                        <View style = {styles.box_sub_22}>
                            <Text style ={{fontStyle:"italic", color:"black"}}>Trạng thái: </Text>
                            <Text>{this.props.value.state}</Text>
                        </View>
                    </View>
                </View>
            </View>
            </>
        )
    }
}
const data = [
    {
        title :"Hẹn gặp lần 1",
        ngay_hen: "14/03/2022",
        state: "Đã xử lý"
    },
    {
        title :"Hẹn gặp lần 2",
        ngay_hen: "14/04/2022",
        state: "Đã xử lý"
    },
    {
        title :"Hẹn gặp lần 3",
        ngay_hen: "14/05/2022",
        state: "Đã lên lịch"
    },
    {
        title :"Hẹn gặp lần 4",
        ngay_hen: "24/05/2022",
        state: "Chờ lên lịch"
    },
    {
        title :"Hẹn gặp lần 5",
        ngay_hen: "24/05/2022",
        state: "Chờ lên lịch"
    },
    {
        title :"Hẹn gặp lần 6",
        ngay_hen: "24/05/2022",
        state: "Chờ lên lịch"
    },
    {
        title :"Hẹn gặp lần 7",
        ngay_hen: "24/05/2022",
        state: "Chờ lên lịch"
    },
]
export default class ListLichHen extends Component{
    constructor(props){
        super(props)
        this.state = {
            valueComboBox: 1,
        }
    }
    onChangeValueComboBox = (itemValue, itemIndex)=>{
        this.setState({
            valueComboBox: itemValue
        })
    } 
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
               center = {<Text style = {{ fontSize: 20, color:"white"}}>Danh sách lịch hẹn</Text>}
            >               
            </Header>
            <ScrollView style = {{ backgroundColor:"#D3D3D3"}}>
                <View style = {{ height: 90, marginTop: 15, }}>
                    <View style = { styles.box_input }>
                        <View style ={{ width: 40, backgroundColor: "white", alignItems:"center"}}>
                            <Ionicons name ="ios-search" size={28}/>
                        </View>
                        <TextInput
                            style = { styles.text_input }
                            onChangeText = {(text)=>{
                                this.onChangeCMND(text)
                            }}
                            placeholder = "Nhập tên cuộc hẹn"
                        />
                    </View>
                    <View style = {styles.box_search}>
                        <View style = {{borderWidth:0.5, height: 40, width: 160, marginRight: 15, justifyContent:"center", backgroundColor:"white"}}>
                            <Picker
                                selectedValue = {this.state.valueComboBox}
                                onValueChange = {(itemValue, itemIndex)=>{this.onChangeValueComboBox(itemValue, itemIndex)}}
                            >
                                <Picker.Item label='Ngày hẹn' value={1}/>
                                <Picker.Item label='Trạng thái' value={2}/>
                            </Picker>
                        </View>
                        <TouchableOpacity
                            style = {styles.search}
                        >
                            <Text style = {{ fontSize: 16, color: "white"}}>Tìm kiếm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {
                    data.map((val) =>{
                        return (
                            <>
                            <View style ={styles.line}></View>
                            <LichHen value = {val}/>
                            </>
                        )
                    })
                }
            </ScrollView>
            </>
        )
    }
}
var styles = StyleSheet.create({
    box_lichhen:{
        flexDirection:"row",
        height: 85,
        width: width - 40,
        marginLeft: 20,
        borderWidth: 0.4,
        backgroundColor: "white",
        borderRadius:3,
        borderColor:"#FF4500"
    },
    img:{
        height: 60,
        width: 60,
    },
    box_text:{
        flex:4,
    },
    box_title:{
        flex: 1.2,
        justifyContent: "center"
    },
    box_2:{
        flex: 2,
        justifyContent: "center"
    },
    line:{
        marginTop: 10,
    },
    sub_line:{
        borderWidth: 0.2,
        height:0.35,
        width: width - 150,
        borderColor: "gray",
        marginBottom: 3,
        marginTop : 5
    },
    box_img:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    box_sub_21:{
        flexDirection: "row",
        flex: 1.3,
        alignItems:"center",
    },
    box_sub_22:{
        flexDirection: "row",
        flex: 1.5,
    },
    box_input:{
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
    text_input:{
        height: 39,
        width: width - 81,
        backgroundColor: "white",
        borderRadius:3,
    },
    search:{
        height: 38,
        backgroundColor: "#00008B",
        width: 85,
        borderRadius: 3,
        justifyContent: "center",
        alignItems:"center"
    },
    box_search:{
        marginTop: 10,
        height: 41, 
        width: width- 40, 
        marginLeft: 20,
        marginBottom: 10,
        flexDirection: "row",
        marginLeft: width - 280
    }
})
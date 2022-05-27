import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native'
import Header from "../components/Header"
import Line from '../components/Line'
import Ionicons  from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
const { width, height } = Dimensions.get("window")
class NguoiThan extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <TouchableOpacity style ={styles.box_nguoithan}
                onPress = {()=>{
                    this.props.navigation.navigate("Hosothannhan", {data: this.props.data})
                }}
            >
                <View style ={ styles.box_img }>
                    <Image  source={require("../image/1.jpg")} style ={styles.img}/>
                </View>
                <View style = { styles.box_text }>
                    <Text style ={{fontSize:18}}>{this.props.data.name}</Text>
                </View>
            </TouchableOpacity>
            </>
        )
    }
}
const  data = [
    {
        name: "Lê Văn A",
        date: "01/01/1995",
        cmnd: "111222333",
        nation: "Kinh",
        sex: "Nam",
        country: "Việt Nam",
        weeding: "Đã kết hôn",
        work: "Bác sĩ",
        prison: ""
    },
    {
        name: "Lê Văn B",
        date: "01/01/1995",
        cmnd: "111222111",
        nation: "Kinh",
        sex: "Nam",
        country: "Việt Nam",
        weeding: "Đã kết hôn",
        work: "Bác sĩ",
        prison: ""
    },
    {
        name: "Lê Văn C",
        date: "01/01/1995",
        cmnd: "111222333",
        nation: "Kinh",
        sex: "Nam",
        country: "Việt Nam",
        weeding: "Đã kết hôn",
        work: "Bác sĩ",
        prison: ""
    },
    {
        name: "Lê Thị D",
        date: "01/01/1995",
        cmnd: "111222444",
        nation: "Kinh",
        sex: "Nữ",
        country: "Việt Nam",
        weeding: "Đã kết hôn",
        work: "Giáo viên",
        prison: ""
    },
    {
        name: "Lê Thị F",
        date: "01/01/1995",
        cmnd: "111222555",
        nation: "Kinh",
        sex: "Nữ",
        country: "Việt Nam",
        weeding: "Đã kết hôn",
        work: "Bác sĩ",
        prison: ""
    },

]
class ThongTinThanNhan extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount(){

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
               center = {<Text style ={{fontSize: 20, color :"white"}}>Thân nhân</Text>}
            >               
            </Header>
            <ScrollView style ={{marginTop: 15}}>
               {
                   this.props.than_nhan.map((value)=>{
                       return (
                        <>
                        <NguoiThan data = {value} navigation = {this.props.navigation}/>
                        <View style = {{ marginBottom:13}}></View>
                        </>
                       )
                   })
               }
            </ScrollView>
            </>
        )
    }
}
function mapStatetoProps(state){
    return {
        than_nhan: state.than_nhan
    };
}
export default connect(mapStatetoProps)(ThongTinThanNhan);
var styles = StyleSheet.create({
    box_nguoithan:{
        flexDirection:"row",
        height: 75,
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
    box_img:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    box_text:{
        flex: 4,
        justifyContent:"center",
        marginLeft: 10
    }
})

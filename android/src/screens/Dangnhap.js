import React, { Component } from "react"
import { View, Text, Dimensions, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import { connect } from "react-redux";
import { getData, postData } from "../connect";
import { storeData } from "../storage";
const { width, height } = Dimensions.get("window")
class SignIn extends Component{
    constructor(props){
        super(props)
        this.state = {
            text_CMND: "",
            text_Pass: "",
            sign_in: 1
        }
    }
    onChangeCMND = (text)=>{
        this.setState({
            text_CMND: text
        })
    }
    onChangePass = (text)=>{
        this.setState({
            text_Pass: text
        })
    }
    /*
    componentDidUpdate(){
        if ( this.props.signIn === true) {
            this.props.navigation.navigate("Bottom_Navigator")
        }
    }
    */
    signIn = async () => {
        let a = await postData({
            "id": this.state.text_CMND,
            "password": this.state.text_Pass
        },"https://vncitizen.deta.dev/api/v1/login" )  
           
        if(a.token){
            this.props.navigation.navigate("Bottom_Navigator") 
            storeData('token', a.token)
            this.props.dispatch({
                type:'GET_INFO',
                info: a.info
            })  
        }

   
    }
    render(){
        return(
            <>
            <View style = { styles.screen }>
                <View style = { styles.box }>
                    <View style = { styles.box_text } >
                        <Text style ={{ color: "#00008B", fontSize: 40, bottom: 30}}>ĐĂNG NHẬP</Text>
                    </View>
                    <Text style = { styles.text1 }>Nhập Căn Cước/CMND:</Text>
                    <View style = { styles.box_input1 }>
                        <TextInput
                            style = { styles.text_input1 }
                            onChangeText = {(text)=>{
                                this.onChangeCMND(text)
                            }}
                        />
                    </View>
                    <Text style = { styles.text2 }>Nhập Mật Khẩu:</Text>
                    <View style = { styles.box_input2 }>
                        <TextInput
                            secureTextEntry={true}
                            style = { styles.text_input2 }
                            onChangeText = {(text) =>{
                                this.onChangePass(text)
                            }}
                        />
                    </View>
                    <View style = { styles.box_button }>
                        <TouchableOpacity
                            style = { styles.button }
                            onPress = {() =>{
                                this.signIn()
                            }}
                        >
                            <Text style ={{ color: "white", fontSize: 20}}>Đăng nhập</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </>
        )
    }
}
function mapStatetoProps(state){
    return {
        signIn: state.signIn
    };
}
export default connect(mapStatetoProps)(SignIn);

var styles = StyleSheet.create({
    screen:{
        backgroundColor: "#FF4500",
        justifyContent: "center",
        flex:1
    },
    box:{
        width: width,
        height: 280,
    },
    box_text:{
        flex:1.3,
        justifyContent:"center",
        alignItems: "center",
        width:width
    },
    box_input1:{
        flex:1.5,
        justifyContent:"center",
        alignItems:"center",
    },
    box_input2:{
        flex:1.5,
        justifyContent:"center",
        alignItems:"center"
    },
    box_button:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginTop:10
    },
    text_input1:{
        height: 45,
        borderWidth:0.5,
        width: width - 120,
        backgroundColor: "white",
        borderRadius:5
    },
    text_input2:{
        height: 45,
        borderWidth:0.5,
        width: width - 120,
        backgroundColor: "white",
        borderRadius:5
    },
    text1:{
        color: "white", 
        fontSize: 18,
        marginLeft: 60,
        bottom:-7
    },
    text2:{
        color: "white",
        fontSize: 18,
        marginLeft: 60,
        bottom: -7
    },
    button:{
        height:45,
        width: width - 230,
        backgroundColor:"#00008B",
        justifyContent: "center",
        alignItems: "center"
    }
})
import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { BigNewpaper, LitleNewpaper } from '../components/Newpaper'
import Line from '../components/Line'
import Header from '../components/Header'
import { connect } from "react-redux";
import { getData, postData } from "../connect";
const data = [1,2,3,4,5,6,7,8,9]
class Home extends Component{
    componentDidMount(){
        postData({
            "_id": this.props.signIn.ThongTinCaNhan
        },"https://backendcnpmem.herokuapp.com/api/readThongTinCaNhan").then((res) =>{
            this.props.dispatch({
                type:"GET_INFO",
                info: res
            })
        })
        getData("https://backendcnpmem.herokuapp.com/api/ThongTinCaNhan").then((res) =>{
            this.props.dispatch({
                type:"GET_ALL_CITIZEN",
                all_citizen: res
            })
        })
        getData("https://backendcnpmem.herokuapp.com/api/ThongTinCanBo").then((res) =>{
            this.props.dispatch({
                type:"GET_ALL_OFFICIALS",
                all_canbo: res
            })
        })      


    }
    render(){
        return(
            <>
            <Header
                center = { <Text style = {{ fontSize: 20, color:"white"}}>Trang chủ</Text>}
            >

            </Header>
            <View style = {{flex:1, backgroundColor:"#D3D3D3"}}>
                <ScrollView>
                    {
                        data.map((value, idx) => {
                            if ( idx === 0 ){
                                return(
                                    <>
                                    <BigNewpaper navigation = {this.props.navigation}></BigNewpaper>
                                    <View style = {{ marginBottom: 10, marginTop: 10 }}>
                                        <Line/>
                                    </View>
                                    <LitleNewpaper navigation = {this.props.navigation}></LitleNewpaper>
                                    <View style = {{ marginBottom: 10, marginTop: 10 }}>
                                        <Line/>
                                    </View>

                                    </>
                                )
                            }
                            if ( idx !== data.length){
                                return (
                                    <>
                                    <LitleNewpaper navigation = {this.props.navigation}></LitleNewpaper>
                                    <View style = {{ marginBottom: 10, marginTop: 10 }}>
                                        <Line/>
                                    </View>

                                    </>
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
function mapStatetoProps(state){
    return {
        thong_tin_ca_nhan: state.thong_tin_ca_nhan,
        signIn: state.signIn
    };
}
export default connect(mapStatetoProps)(Home);
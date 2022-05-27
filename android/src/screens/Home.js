import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { BigNewpaper, LitleNewpaper } from '../components/Newpaper'
import Line from '../components/Line'
import Header from '../components/Header'
import { connect } from "react-redux";
import { getData } from "../connect";
const data = [1,2,3,4,5,6,7,8,9]
class Home extends Component{
    componentDidMount(){
        getData("http://10.0.2.2:3000/tien_an_tien_su").then((res) =>{
            this.props.dispatch({
                type:"GET_VIOLATE",
                tien_an_tien_su: res
            })
        })
        getData("http://10.0.2.2:3000/thanh_vien").then((res) =>{
            this.props.dispatch({
                type:"GET_HOME",
                than_nhan: res
            })
        })
        setTimeout(() => {
            console.log("mm:",this.props.thong_tin_ca_nhan)
        }, 2000);
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
        thong_tin_ca_nhan: state.thong_tin_ca_nhan
    };
}
export default connect(mapStatetoProps)(Home);
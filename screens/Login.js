import React, {Component} from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { Container, Header, Content, Button} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Login extends React.Component{
    
    render(){
        return (
            
            <View style={style.Login}>
                <View>
                    <Text style={style.logoStyle}>iMaid</Text>
                </View>
                <View>
                    <TextInput style={style.textinputA} placeholder="Email" placeholderTextColor="#fff"
                    underlineColorAndroid={'transparent'} />   
            
                    <TextInput style={style.textinputB} placeholder="Senha" placeholderTextColor="#fff"
                    underlineColorAndroid={'transparent'} secureTextEntry={true} />
                    
                   
                    <Button style={style.posicaoBotao} block success onPress={()=>Actions.home()}>
                        <Text style={style.txtBotao}>Entrar</Text>
                    </Button>

                    <Button style={style.posicaoBotao} block danger onPress={()=>Actions.registro() } >
                        <Text style={style.txtBotao}> Cadastre-se </Text>
                    </Button>
                    
                </View>

            </View>
           
        )

    }
}

const style = StyleSheet.create({
    Login: {
       flex: 1,
       backgroundColor:'#36485f', 
    },
    logoStyle:{
        alignContent: 'center',
        marginLeft: 126,
        marginTop:30,
        fontSize: 40,
        color: '#fff'
    },
    posicaoBotao:{
        marginLeft:50,
        marginRight:50,
        marginBottom: 10
    },
    textinputA: {
        height: 40,
        marginBottom: 30,
        marginLeft:30,
        marginRight:30,
        marginTop: 160,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    },
    textinputB: {
        height: 40,
        marginBottom: 50,
        color: '#fff',
        marginLeft:30,
        marginRight:30,
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1
    },
    txtBotao: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        fontFamily: 'sans-serif'
    }
    
});

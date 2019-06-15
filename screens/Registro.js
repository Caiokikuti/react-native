import React, {Component} from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView} from 'react-native'

export default class Registro extends React.Component{
    
    render(){
        return (
             
                <View style={style.registro}>
                    
            
                <TextInput style={style.textinput} placeholder="Seu nome" placeholderTextColor="#fff"
                underlineColorAndroid={'transparent'} />   
          
                <TextInput style={style.textinput} placeholder="Email" placeholderTextColor="#fff"
                underlineColorAndroid={'transparent'} />  
          
                <TextInput style={style.textinput} placeholder="CPF" placeholderTextColor="#fff"
                underlineColorAndroid={'transparent'} />  

                <TextInput style={style.textinput} placeholder="CPF" placeholderTextColor="#fff"
                underlineColorAndroid={'transparent'} />  

                <TextInput style={style.textinput} placeholder="CPF" placeholderTextColor="#fff"
                underlineColorAndroid={'transparent'} />  

                <TextInput style={style.textinput} placeholder="CPF" placeholderTextColor="#fff"
                underlineColorAndroid={'transparent'} />

                <TextInput style={style.textinput} placeholder="CPF" placeholderTextColor="#fff"
                underlineColorAndroid={'transparent'} />


                <TextInput style={style.textinput} placeholder="CPF" placeholderTextColor="#fff"
                underlineColorAndroid={'transparent'} />

                <TouchableOpacity style={style.button}>
                    <Text style={style.buttontext}> Finalizar </Text>
                </TouchableOpacity>
          
            </View>
           
        )

    }
}

const style = StyleSheet.create({
    registro: {
       alignSelf: 'stretch'
    },
    header: {
         fontSize: 24,
         color: '#fff',
         paddingBottom: 10,
         marginBottom: 40,
         borderBottomColor: '#199187',
         borderBottomWidth: 1

    },

    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1


    },

    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 30
    },

    buttontext: {
        color: "#fff",
        fontWeight: 'bold'

    }



});







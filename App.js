import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { Router, Scene} from 'react-native-router-flux';

import Login from './screens/Login' 
import Registro from './screens/Registro'
import Home from './screens/Home'
import RelatorioGer from './screens/RelatorioGer'
import RelatorioServicos from './screens/RelatorioServicos'
import RelatorioBalanco from './screens/RelatorioBalanco'

export default class App extends Component{
  render() {
    return (
       <Router navigationBarStyle={styles.navBar} titleStyle={styles.navTitle}>
         <Scene key="root">
             <Scene key = 'login' component={Login} initial hideNavBar={true}/>
             <Scene key = 'home'  component={Home} title='Home' hideNavBar={true} />
             <Scene key = 'registro' component={Registro} title='Registrar' />
             <Scene key ='relatorio1' component = {RelatorioGer} title='Relatorio do Gerente' />
             <Scene key = 'relatorio2' component = {RelatorioServicos} title ='Relatório de Serviços' />
             <Scene key = 'relatorio3' component = {RelatorioBalanco} title ='Ganhos do Mês' />
         </Scene>
       </Router>
      // <Login />        

        
    );
  }   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#36485f',
    paddingLeft: 40,
    paddingRight: 40
},
  
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  navBar: {
    backgroundColor: '#36485f', // changing navbar color
    marginBottom:0
  },
  navTitle: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'sans-serif'
  }
});

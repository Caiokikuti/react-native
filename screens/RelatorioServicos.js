import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image
} from "react-native";
import { Container, Content, Body, Toast, Left, Thumbnail, Button} from 'native-base'

class RelatorioServicos extends Component {
    render() {
        const uri = 'https://scontent.fbfh3-2.fna.fbcdn.net/v/t1.0-9/16684353_1178339532282701_4621693974626167838_n.jpg?_nc_cat=108&_nc_oc=AQlHmMvqzCU7Af_-yxY561PDNISlZFwMUApW1MICJPGnwxTmTCH3lUkrFMUnWnIgC8cIfLZRg4Fdwn9ZyUJwJF44&_nc_ht=scontent.fbfh3-2.fna&oh=372b148d08dd5a29b15356df5f6f99d7&oe=5DC688DC'
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.txtTitulo}> Relatório de Serviços</Text>
                    <Content>
                    <Left>
                        <Thumbnail style={styles.avatar} large source={{uri: uri}}/>
                    </Left>
                    </Content>
                    
                    <Text style={styles.txt}> Nome do Usuário: Gabriel Arruda Andrella</Text>
                    <Text style={styles.txt}> Tipo da Conta: Conta Prestador</Text>
                    <Text style={styles.txt}> Serviços contratados: 90</Text>
                    <Text style={styles.txt}> Serviços contratados no mês: 10</Text>
                    <Text style={styles.txt}>Média de Avaliação Mensal: 4,5 </Text>
                    <Text style={styles.txt}>Média de Avaliação Mensal: 4,7 </Text>
                    <Text style={styles.txt}>Serviço mais contratado: Limpeza </Text>
                    <Text style={styles.txt}>Gasto mensal (atual): R$ 1020  </Text>
                    
                    <Text style={styles.txtSubtitulo}>Histórico de Serviços mensais contratados</Text>

                    <View style={styles.box}>
                        <Text style={styles.txtStrong}>  12/06 Serviço de limpeza - R$ 70 - Carla</Text>
                        <Text style={styles.txtStrong}>  10/06 Encanador - R$ 170 - Carlos</Text>
                        <Text style={styles.txtStrong}>  09/06 Serviço de limpeza - R$ 70 - Carla</Text>
                        <Text style={styles.txtStrong}>  08/06 Serviço de limpeza - R$ 90 - Julia</Text>
                        <Text style={styles.txtStrong}>  07/06 Serviço de limpeza - R$ 70 - Carla</Text>
                        <Text style={styles.txtStrong}>  06/06 Eletricista - R$ 210 - Sandro</Text>
                        <Text style={styles.txtStrong}>  05/06 Serviço de limpeza - R$ 150 - Rodney</Text>
                        <Text style={styles.txtStrong}>  04/06 Serviço de limpeza - R$ 70 - Carla</Text>
                        <Text style={styles.txtStrong}>  03/06 Serviço de limpeza - R$ 50 - Caio</Text>
                        <Text style={styles.txtStrong}>  01/06 Serviço de limpeza - R$ 70 - Carla</Text>
                    </View>

                    <Text style={styles.txtStrong}> Incoerência nos gastos? Avise-nos</Text>
                    <Text style={styles.txtStrong}> Contato: imaidsup@gmail.com</Text>
                    <Text>Relatório gerado em 15 de Junho</Text>
                        

                </View>
            </ScrollView>
        );
    }
}
export default RelatorioServicos;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection:'column',
        backgroundColor: '#fff'
    },
    box: {
		flex: 1,    
		backgroundColor: '#fff',
        borderWidth: 1,
        borderColor:'black',
    	borderRadius: 20,
    	marginTop: 20,
        margin: 5,
        marginBottom:20
    },
    txtTitulo: {
		fontSize: 20,
		color: '#000',
		fontWeight: '500',
		textAlignVertical: 'center',
		fontFamily: 'arial',
		margin: 10
    },
    txtSubtitulo:{
        fontSize: 18,
		color: '#000',
		fontWeight: '500',
		textAlignVertical: 'center',
		fontFamily: 'arial',
		margin: 10
    },
    txt: {
		fontSize: 16,
		color: '#000',
		fontWeight: '400',
		textAlignVertical: 'center',
		fontFamily: 'arial',
		margin: 10,
		marginTop: 2
    },
    txtStrong: {
		fontSize: 16,
		color: '#000',
		fontWeight: 'bold',
		textAlignVertical: 'center',
		fontFamily: 'arial'
    },
    icons: {
        marginLeft:60,
        marginTop:20,
        width: 200,
        height:150
    },
    avatar:{
        marginTop: 40,
        marginBottom: 30
    }

});
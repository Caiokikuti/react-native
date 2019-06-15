import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image
} from "react-native";
import { Container, Content, Body, Toast, Left, Thumbnail, Button} from 'native-base'

class RelatorioBalanco extends Component {
    render() {
        const uri = 'https://scontent.fbfh3-2.fna.fbcdn.net/v/t1.0-9/10262025_631073110323030_6748677386334850280_n.jpg?_nc_cat=110&_nc_oc=AQmKxfyx29sES4CubePogCa885SzKHUcn0M0-tZFtp3jOArDTJpRfgQzHZoaPtjRByYvGfpq9_rQ43-dFpYx8BSB&_nc_ht=scontent.fbfh3-2.fna&oh=a7f7c6d351d3fea1adf6755e99e77477&oe=5D83EB8F'
        return (
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.txtTitulo}> Relatório de Ganhos mensais do Prestador</Text>
                <Content>
                <Left>
                    <Thumbnail style={styles.avatar} large source={{uri: uri}}/>
                </Left>
                </Content>
                
                <Text style={styles.txt}>Nome do Usuário: Mateus Felipe Larrosa Furlan</Text>
                <Text style={styles.txt}>Tipo de Serviço: Encanador</Text>
                <Text style={styles.txt}>Serviços Prestados no mês: 10</Text>
                <Text style={styles.txt}>Local de maior contrato: Maringá Zona 7</Text>
                <Text style={styles.txt}>Média de Avaliação Mensal: 5,0 </Text>
                <Text style={styles.txt}>Média de Avaliação Mensal: 4,93 </Text>
                
                <Text style={styles.txt}>Ganho mensal (Líquido): R$ 1020  </Text>
                <Text style={styles.txt}> Ganho mensal (Bruto): R$ </Text>
                
                <Text style={styles.txtSubtitulo}>Histórico de Serviços Prestados</Text>

                <View style={styles.box}>
                    <Text style={styles.txtStrong}>  12/06 Zona 7, Av colom 238 - R$ 70</Text>
                    <Text style={styles.txtStrong}>  10/06 Zona 7, LÍbero Badaro 139 - R$ 170</Text>
                    <Text style={styles.txtStrong}>  09/06 Alvorada, Aparecida 1222 - R$ 70</Text>
                    <Text style={styles.txtStrong}>  08/06 Zona 7, Clementina 210 - R$ 90</Text>
                    <Text style={styles.txtStrong}>  07/06 Zona 7, Av Morangueira 211 - R$ 70</Text>
                    <Text style={styles.txtStrong}>  06/06 Zona 7, Av São Paulo - R$ 210</Text>
                    <Text style={styles.txtStrong}>  05/06 Centro, Horácio Racanelo 28 - R$  150</Text>
                    <Text style={styles.txtStrong}>  04/06 Zona 7, Av São Paulo 122 - R$ 70</Text>
                    <Text style={styles.txtStrong}>  03/06 Alvorada, Aparecida 122 - R$ 50</Text>
                    <Text style={styles.txtStrong}>  01/06 Zona 8, Vidal 1229- R$ 70</Text>
                </View>

                <Text style={styles.txtSubtitulo}>Gráfico de ganhos nos últimos meses</Text>    
                <Image source={require('../pictures/ganhoMes.png')} style={styles.icons} />

                <Text style={styles.txtStrong}> Incoerência nos dados? Avise-nos</Text>
                <Text style={styles.txtStrong}> Contato: imaidsupPrestador@gmail.com</Text>
                <Text>Relatório gerado em 15 de Junho</Text>
                    

            </View>
        </ScrollView>
        );
    }
}
export default RelatorioBalanco;

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
        marginLeft:10,
        marginTop:20,
        width: 300,
        height:200
    },
    avatar:{
        marginTop: 40,
        marginBottom: 30
    }
});
import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image
} from "react-native";


class RelatorioGer extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    
                        <Text style={styles.txtTitulo}>
                            Relatório Financeiro Referente ao mes de Junho                          
                        </Text>

                        <Text style={styles.txt}>Acessos ao aplicativo: 123.678</Text>
                        <Text style={styles.txt}>Número de visualizações de propaganda: 98.221</Text>
                        <Text style={styles.txt}>Número de novos prestadores cadastrados: 349</Text>    
                        <Text style={styles.txt}>Númeto de clientes novos: 1766</Text>    

                        <Text style ={styles.txtSubtitulo}>
                            Informações de Renda por Meio de Pagamentos
                        </Text> 
                        
                        <Text style={styles.txt}>
                            Nesta Seção constam os ganhos líquidos e brutos referentes aos pagamentos
                            efetuados na plataforma no presente mês. Estão especificados os ganhos 
                            de pagamentos utilizando cartão e boleto.
                        </Text>

                        <Text style={styles.txt}>Pagamentos em dinheiro: 21.040</Text>
                        <Text style={styles.txt}>Movimentações em dinheiro: R$ 200010</Text>
                        <Text style={styles.txt}>Arrecadação por pagamento em dinheiro (bruto):R$ 30001</Text>    
                        <Text style={styles.txt}>Pagamentos no cartão de crédito: 42.992</Text>
                        <Text style={styles.txt}>Movimentações por cartão de crédito: R$ 389010</Text>
                        <Text style={styles.txt}>Arrecadação por pagamento em dinheiro (bruto):R$ 59701,50</Text>


                        <Text style={styles.txtSubtitulo}>Arrecadação por publicidade e propaganda</Text>

                        <Text style={styles.txt}>Publicidades ativas: 11 </Text>
                        <Text style={styles.txt}>Ganho/visualizações: R$ 0,15</Text>
                        <Text style={styles.txt}>Arrecadação mensal:R$ 1150,30</Text>

                        <Text style={styles.txtSubtitulo}>Porcentagem de ganhos em dinheiro (últimos meses)</Text>
                        
                        <Image source={require('../pictures/GanhosPizza.png')} style={styles.icons}/>

                        <Text style={styles.txtSubtitulo}>Porcentagem de ganhos no cartão de crédito (últimos meses)</Text>

                        <Image source={require('../pictures/cartaoGanhos.png')} style={styles.icons}/>

                        <Text style={styles.txt}>Relatorio gerado em: 15/06/2019 </Text>
                    {/* </View> */}
                </View>
                
            </ScrollView>
        );
    }
}
export default RelatorioGer;

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
    	borderRadius: 30,
    	marginTop: 20,
    	margin: 5
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
    icons: {
        marginLeft:60,
        marginTop:20,
        width: 200,
        height:150
    }
});
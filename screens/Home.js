import React, { Component } from "react";
import { Container, Header, Content, Body, FooterTab, Button, Title, Icon, Left, Thumbnail} from 'native-base'
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { ActionConst, Actions } from "react-native-router-flux";

class Home extends Component {
    render() {
        const uri = "https://scontent.fbfh2-1.fna.fbcdn.net/v/t1.0-9/13055526_1220617704657570_8608072702891017277_n.jpg?_nc_cat=100&_nc_oc=AQlOgewbc5AFSlAY0uNcE2zKRIrLXVAoSngCXYJHgVAItTVG7cz7TjwZGoLbUYLq9c0&_nc_ht=scontent.fbfh2-1.fna&oh=b1985913699c717957bd0a95a24cd68b&oe=5DC6C447"
        return (
            <Container>
                <Header>
                    <Left>
                        <Icon name = 'person' />
                    </Left>
                    <Body>
                        <Title>Admin page</Title>
                    </Body>
                </Header>
                <Content>
                    <Left>
                        <Thumbnail style={styles.icone} large source={{uri: uri}} />
                    </Left>
                    <Text style = {styles.textAcess1}> Administrador: Caio KIkuti</Text>
                    <Text style={styles.textAcess2}>Ultimo acesso em 14 de Junho </Text>

                    <Button style={styles.posicaoBotao} block onPress={()=>Actions.relatorio1()}>
                        <Text style={styles.txtBotao}>Relatorio Financeiro</Text>
                    </Button>
                    <Button style={styles.posicaoBotao} block success onPress={()=>Actions.relatorio2()}>
                        <Text style={styles.txtBotao}>Relatorio de qualquer coisa</Text>
                    </Button>
                    <Button style={styles.posicaoBotao} block info onPress={()=>Actions.relatorio3()}>
                        <Text style={styles.txtBotao}>MINHA ROLA</Text>
                    </Button>

                </Content>
                
            
          </Container>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icone:{
        marginTop: 30
    },
    textAcess1:{
        marginLeft: 90
    },
    textAcess2:{
        marginLeft:90,
        marginBottom:50
    },
    txtBotao: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        fontFamily: 'sans-serif'
    },
    posicaoBotao:{
        marginLeft:30,
        marginRight:30,
        marginBottom: 10
    }


});
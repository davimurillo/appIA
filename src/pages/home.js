import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import  Menus  from './menu'
import  Codes  from './codes'

class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    }

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <Image source={require('../img/logoiasac.png')}
                       style={{width: 200, height: 68}} onload = { setTimeout(() => navigate('Menus'),3000)  } />
                <Text style={styles.titulo}> Expertos en ergonomia e higiene ocupacional </Text>
            </View>
        )
    }
}

const NavigationApp = createStackNavigator({
    Home: { screen: HomeScreen },
    Menus : { screen: Menus },
    codes : { screen:  Codes },
},{ headerMode: 'none', })



export default class App extends React.Component {
    render() {
        return <NavigationApp />;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo:{
        fontSize: 10,
        fontWeight: 'bold',
        marginTop: 20,
    }
});
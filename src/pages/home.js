import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import  ProfileScreen  from './dashboard.js'

class HomeScreen extends React.Component {

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <Image source={require('../img/logoiasac.png')}
                       style={{width: 300, height: 100}} onload = { setTimeout(() => navigate('Profile'),3000)  } />
            </View>
        )
    }
}

const NavigationApp = createStackNavigator({
    Home: { screen: HomeScreen },
    Profile : { screen: ProfileScreen }
})


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
    }
});
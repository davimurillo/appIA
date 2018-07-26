import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput
} from 'react-native';


export default class ProfileScreen extends Component {
    state = {
        text: '',
    }

    static navigationOptions = {
        header: null
    }

    onChangeText = (text) => this.setState({text})

    onSubmitEditing = () => {
        const {onSubmitEditing} = this.props
        const {codigo} = this.state

        if (!codigo) return // Don't submit if empty

        onSubmitEditing(codigo)
        this.setState({codigo: '', agente: ''})
    }

    handleKeyDown = (e) => {
        alert('entre');
        if(e.nativeEvent.key == "Enter"){
            this.props.navigation.navigate('codes', { id: this.state.codigo })
        }
    }

    render(){
        console.log(this.props.navigation);
        const {codigo, agente} = this.state
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.containerProfile}>
                <Image source={require('../img/logoiasac.png')}
                       style={styles.image} />
                <Text style={styles.titulo}> VALORES LÍMITE PERMISIBLES PARA AGENTES QUÍMICOS </Text>
                <TextInput
                    style={styles.input}
                    value={codigo}
                    placeholder={'CÓDIGO No. CAS'}
                    onChangeText={this.onChangeText}
                    returnKeyType='search'
                    autoFocus={true}
                    onSubmitEditing={this.searchSubmit}
                    onKeyPress={ this.handleKeyDown }
                    underlineColorAndroid="transparent"
                        />

                <TextInput
                    style={styles.input}
                    value={agente}
                    placeholder={'AGENTE QUÍMICO A BUSCAR'}
                    onChangeText={this.onChangeText}
                    onSubmitEditing={this.onSubmitEditing}
                />

                <View style={styles.containerFoo}>
                    <Image source={require('../img/minsa-logo.png')}
                           style={{width: 300, height: 100}} />
                </View>
            </View>

        )
    }
}



const styles = StyleSheet.create({
    containerProfile: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    containerFoo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 50,
    },
    image: {
        width: 200,
        height: 68,
        marginTop: 40
    },
    titulo: {
        fontWeight: 'bold',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 10,
    },
    input: {
        padding: 15,
        height: 50,
        width: 300,
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderWidth: 1,
        marginTop: 20
    }
});
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TextInput
} from 'react-native';

export default class ProfileScreen extends Component {
    state = {
        text: '',
    }

    onChangeText = (text) => this.setState({text})

    onSubmitEditing = () => {
        const {onSubmitEditing} = this.props
        const {text} = this.state

        if (!text) return // Don't submit if empty

        onSubmitEditing(text)
        this.setState({text: ''})
    }
    render(){

        const {text} = this.state
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.containerProfile}>
                <Image source={require('../img/logoiasac.png')}
                       style={{width: 300, height: 100}} />
                <TextInput
                    style={styles.input}
                    value={text}
                    placeholder={'Código o Descripción a buscar'}
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
        marginTop: 20
    },
    input: {
        padding: 15,
        height: 50,
        width: '100%',
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderWidth: 1,
        marginTop: 20
    }
});
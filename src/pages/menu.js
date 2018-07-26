import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation'; // Version can be specified in package.json
import  Menus  from './dashboard'
import PDFView from 'react-native-view-pdf';


class SettingsScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

class Docs extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <PDFView
                    style={{ flex: 1 }}
                    onError={(error) => console.log('onError', error)}
                    onLoad={() => console.log('PDF rendered from file')}
                    resource={'../assets/documents/DS_015-2005-SA.pdf'}
                    resourceType="file"
                />
            </View>
        );
    }
}

export default createBottomTabNavigator({
    Menu: { screen: Menus },
    Noticias: { screen: SettingsScreen },
    Documentos: { screen: Docs },
});
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Codes extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button
                    title="Go to Home"
                    onPress={() => this.navigateBack}
                />
            </View>
        );
    }
}


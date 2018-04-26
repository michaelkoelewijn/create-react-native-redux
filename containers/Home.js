import React from "react";
import { Actions } from 'react-native-router-flux';
import { View, Text, Button } from 'react-native';

export default class Home extends React.Component {
    render() {
        return (
            <View>
              <Text style={{ margin: 50 }}>Home</Text>
              <Button title="Go to About" onPress={() => Actions.todos({ param1: 'test' })} />
            </View>
        )
    }
}
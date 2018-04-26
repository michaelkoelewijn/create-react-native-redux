import React from "react";
import { Actions } from 'react-native-router-flux';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { View, Text, ActivityIndicator } from 'react-native';

import { fetchTodo, clearTodo } from '../actions/Todo'; 

class Todos extends React.Component {

    componentDidMount() {
        this.props.actions.fetchTodo(this.props.id)
    }

    componentWillUnmount() {
        this.props.actions.clearTodo();
    }

    render() {
        
        const { item } = this.props;
        
        if(!Object.keys(item).length) 
            return (
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size="large" />
                </View>
            ) 

        return (
            <View style={{ padding: 15 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>{item.title}</Text>
                <Text>{item.body}</Text>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        item: state.todo.item
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({fetchTodo, clearTodo}, dispatch)
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Todos);
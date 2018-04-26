import React from "react";
import { Actions } from 'react-native-router-flux';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';

import { fetchTodos } from '../actions/Todo'; 

class Todos extends React.Component {

    componentDidMount() {
        this.props.actions.fetchTodos();
    }

    renderItem({ item, index, seperators }) {
        
        return (
            <View style={styles.todoItem}>
                <Text onPress={() => Actions.todo({id: item.id})} style={styles.todoText}>{item.title}</Text>
            </View>
        )
    }

    render() {
        const { items } = this.props;
        return (
            <View>
                <FlatList
                    data={items}
                    renderItem={this.renderItem}
                    keyExtractor={({id}) => `${id}` }
                />
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        items: state.todo.items
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({fetchTodos}, dispatch)
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Todos);

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    todoItem: {
        padding: 5,
        backgroundColor: '#FFF',
        borderWidth: .5,
        borderColor: '#ddd',
    },
    todoText: {
        padding: 15,
    }
});
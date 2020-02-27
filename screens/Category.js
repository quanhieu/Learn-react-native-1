import React, { Component } from 'react';
import { View, Text } from "react-native";

class Category extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('categoryName')
        }
    }

    render() {
        const { navigation } = this.props;
        return (
            <View>
                <Text>
                    Hello is meaning {navigation.getParam("categoryName")}
                </Text>
            </View>
            
        )
    }
}

export default Category;
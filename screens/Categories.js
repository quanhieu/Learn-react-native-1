import React, { Component } from 'react';
import CategoryList from "../components/CategoryList";
import { View, FlatList, StyleSheet } from "react-native";
import axios from "axios";

class Categories extends Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#f4511e'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        },
        headerTitleAlign: "center"
    };

    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    async componentDidMount() {
        await axios.get("/categories")
            .then(res => {
                this.setState({categories: res.data})
            })
            .catch(err => console.error(err))
    }

    render() {
        const { navigation } = this.props;
        const { categories } = this.state;
        return (
            <View>
                <FlatList
                    data={categories}
                    renderItem={({item}) => (
                        <CategoryList 
                            value={item} 
                            onPress={() => navigation.navigate("Category", {
                                categoryName: item.name,
                                categoryId: item.id
                            })}
                        />
                    )}
                    keyExtractor={key => `${key.id}`}
                    contentContainerStyle={styles.container}
                />
            </View>
        )
    }
}

export default Categories;

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,

    }
})
import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from "react-native";
import ProductList from "../components/ProductList";

class Category extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('categoryName')
        }
    }

    constructor(props){
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    image: "https://images.unsplash.com/photo-1572865662893-fd784e0a2e9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
                    name: "Drill",
                    price: 25
                },
                {
                    id: 2,
                    image: "https://images.unsplash.com/photo-1578349279248-c12ad135ff9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=602&q=80",
                    name: "Pain brush",
                    price: 8
                }
            ]
        }
    }

    render() {
        const { products } = this.state;
        return (
            <View>
                <FlatList
                    data={products}
                    renderItem={({item}) => (
                        <View style={styles.wrapper}>
                            <ProductList product={item}/>
                        </View>
                    )}
                    keyExtractor={key => `${key.id}`}
                    contentContainerStyle={styles.container}
                    numColumns="2"
                />
            </View>
            
        )
    }
}

export default Category;

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
        paddingHorizontal: 8
    },
    wrapper: {
        flex:1,
        paddingHorizontal: 8
    }
})
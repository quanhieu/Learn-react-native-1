import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from "react-native";
import ProductList from "../components/ProductList";
import axios from "axios";

class Category extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('categoryName')
        }
    }

    constructor(props){
        super(props);
        this.state = {
            products: []
        }
    }

    async componentDidMount() {
        try {
            const {navigation} = this.props;
            const {categoryId} = navigation.state.params;
            await axios.get(`/products?category=${categoryId}`)
                .then(res => this.setState({products: res.data}))
                .catch(err => console.error(err))
        } catch(err) {
            console.log(err);
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
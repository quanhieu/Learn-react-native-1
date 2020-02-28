import React, { Component } from 'react';
import CategoryList from "../components/CategoryList";
import { View, FlatList, StyleSheet } from "react-native";
import axios from "axios";
import email from "../assets/images/email.png";
import maintenance from "../assets/images/maintenance.png";
import trash from "../assets/images/trash.png";

class Categories extends Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    async componentDidMount() {
        await axios.get("http:/10.0.3.2:3000/categories")
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
                                categoryName: item.name
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
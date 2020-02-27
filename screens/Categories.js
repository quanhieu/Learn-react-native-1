import React, { Component } from 'react';
import CategoryList from "../components/CategoryList";
import { View, FlatList, StyleSheet } from "react-native";
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
            categories: [
                {id: 1, name: "Document", img: email},
                {id: 2, name: "Repair tool", img: maintenance},
                {id: 3, name: "Trash can", img: trash}
            ]
        }
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
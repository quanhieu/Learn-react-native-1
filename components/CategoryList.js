import React from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";

function Categorylist(props) {
    const { value, onPress } = props;

    return (
        <TouchableOpacity 
            activeOpacity={0.5} 
            onPress={onPress}
        >
            <View style={styles.container}>
                <Text style={styles.text}>
                    {value.name}
                </Text>
                <Image style={styles.categoryImage} source={{uri: value.img}}/>
            </View>
        </TouchableOpacity>
    )
}

export default Categorylist;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 16,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: {
            width: 0,
            height: 0
        },
        elevation: 1,
        borderRadius: 4,
        backgroundColor: "#FFF",
        marginBottom: 16
    },
    text: {
        textTransform: "uppercase",
        fontWeight: "700",
        marginBottom: 8
    },
    categoryImage: {
        width: 380,
        height: 90
    }    
})
import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
const SearchBar = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} placeholder="Search Here ..." />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 50,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        justifyContent: 'center',
        marginHorizontal: 20
    },

    textInput: {
        width: '100%',
        height: '100%',
        paddingLeft: SIZES.padding * 2,
        fontSize: SIZES.font
    }
});

export default SearchBar;
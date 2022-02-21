import React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";


const Home = ({ children }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ height: '100%', width: '100%' }}>
                {children}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },

});

export default Home;
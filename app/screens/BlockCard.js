import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES, images } from "../constants";
import Title from "./Title";
import Subtitle from "./Subtitle";

const BlockCard = ({ item, style, imageStyle }) => {
    const { thumbnail, title, desc } = item;
    return (
        <View style={[styles.container, style]}>
            <Image source={{ uri: thumbnail }} style={[styles.image, imageStyle]} />
            <View style={styles.contentContainer}>
                <Title>{title}</Title>
                <Subtitle>{desc}</Subtitle>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        borderRadius: SIZES.radius,
        overflow: 'hidden',
        backgroundColor: COLORS.white
    },
    image: {
        width: '100%',
        height: 200
    },
    contentContainer: {
        padding: 5
    }
});

export default BlockCard;
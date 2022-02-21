import React from "react";
import { StyleSheet } from "react-native";
import BlockCard from "./BlockCard";
import { COLORS, FONTS, SIZES } from "../constants";


const SmallCard = ({ item }) => {
    return <BlockCard item={item} style={styles.container} imageStyle={styles.image} />
}

const styles = StyleSheet.create({
    container: {
        width: SIZES.width / 2,
        marginRight: 15,
        height: 200
    },
    image: {
        height: 100,
    }
});

export default SmallCard;
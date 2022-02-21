import React from "react";
import { FlatList, View } from "react-native";
import Title from "./Title";
import SmallCard from "./SmallCard";


const HorizontalList = ({ title, data }) => {
    return (
        <>
            <Title size={20}>{title}</Title>
            <View style={{ marginVertical: 15 }}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <SmallCard item={item} />}
                />
            </View>
        </>
    )

}

export default HorizontalList;
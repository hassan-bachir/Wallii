import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { images } from "../constants";

const Logo = (props) => {
    return (
        <View style={styles.container}>
            <Image
                source={images.Logo}
                style={styles.logo}
                resizeMode="contain"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    logo: {
        width: 181,
        height: 82,
    },
});

export default Logo;

import React from "react";
import backgroundImg from "../assets/images/background.png";
import { images } from "../constants";

import { ImageBackground, StyleSheet } from "react-native";

const Background = ({ children }) => {
    return (
        <ImageBackground source={images.background} style={styles.background}>
            {children}
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        width: "100%",
        height: "100%",
    },
});

export default Background;

import React from "react";
import backgroundImg from "../assets/images/background.png";
import { ImageBackground, StyleSheet } from "react-native";

const Background = ({ children }) => {
    return (
        <ImageBackground source={backgroundImg} style={styles.background}>
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

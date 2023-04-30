import React from "react";
import { IMAGES } from "../../constants";

import { ImageBackground, StyleSheet } from "react-native";

const Background = ({ children, image }) => {
    const backgroundImage = image ? image : IMAGES.BACKGROUND;
    return (
        <ImageBackground source={backgroundImage} style={styles.background}>
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

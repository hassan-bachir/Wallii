import React from "react";
import { View, Image } from "react-native";
import { IMAGES } from "../../constants";
import styles from "./Logo.styles";

const Logo = () => {
    return (
        <View style={styles.container}>
            <Image
                source={IMAGES.LOGO}
                style={styles.logo}
                resizeMode="contain"
            />
        </View>
    );
};

export default Logo;

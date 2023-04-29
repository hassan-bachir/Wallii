import React, { useState } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES, FONTS, COLORS, SIZES } from "../../constants";
import {
    Background,
    Button,
    Container,
    CustomTextInput,
    Logo,
} from "../../components";

export default function Login({ navigation }) {
    const navigateToWelcome = () => {
        navigation.navigate(ROUTES.WELCOME);
    };

    return <View></View>;
}

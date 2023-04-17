import React from "react";
import Home from "./screens/HomeScreen";
import * as Font from "expo-font";

const getFonts = () =>
    Font.loadAsync({
        "Montserrat-medium": require("./assets/fonts/MontserratAlternates-Regular.ttf"),
        "Montserrat-medium": require("./assets/fonts/MontserratAlternates-Medium.ttf"),
        "Montserrat-medium": require("./assets/fonts/MontserratAlternates-Italic.ttf"),
        "Montserrat-medium": require("./assets/fonts/MontserratAlternates-SemiBold.ttf"),
        "Montserrat-medium": require("./assets/fonts/MontserratAlternates-Bold.ttf"),
    });

export default function App() {
    return <Home />;
}

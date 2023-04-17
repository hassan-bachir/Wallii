import React, { useState } from "react";
import Home from "./screens/HomeScreen";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
const getFonts = () =>
    Font.loadAsync({
        "Montserrat-regular": require("./assets/fonts/MontserratAlternates-Regular.ttf"),
        "Montserrat-medium": require("./assets/fonts/MontserratAlternates-Medium.ttf"),
        "Montserrat-italic": require("./assets/fonts/MontserratAlternates-Italic.ttf"),
        "Montserrat-semiBold": require("./assets/fonts/MontserratAlternates-SemiBold.ttf"),
        "Montserrat-bold": require("./assets/fonts/MontserratAlternates-Bold.ttf"),
    });

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    return <Home />;
    // if (fontsLoaded) {
    //     return <Home />;
    // } else {
    //     return (
    //         <AppLoading
    //             startAsync={getFonts}
    //             onFinish={() => setFontsLoaded(true)}
    //         />
    //     );
    // }
}

import React, { useEffect, useState } from "react";
import Home from "./screens/home/HomeScreen";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

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

    useEffect(() => {
        const loadFontsAndHideSplashScreen = async () => {
            try {
                await SplashScreen.preventAutoHideAsync();
                await getFonts();
            } catch (error) {
                console.error(error);
            } finally {
                setFontsLoaded(true);
                SplashScreen.hideAsync();
            }
        };

        loadFontsAndHideSplashScreen();
    }, []);

    if (!fontsLoaded) {
        return null;
    }

    return <Home />;
}

import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./routes/appStack";
import AdminStack from "./routes/adminStack";
import store from "./store";
import { Provider } from "react-redux";
import { loadFonts } from "./constants";

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        const loadFontsAndHideSplashScreen = async () => {
            try {
                await SplashScreen.preventAutoHideAsync();
                await loadFonts();
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
    return (
        <Provider store={store}>
            <NavigationContainer>
                <AppStack />
            </NavigationContainer>
        </Provider>
    );
}

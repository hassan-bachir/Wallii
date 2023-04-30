import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppStack from "./routes/appStack";
import HomeStack from "./routes/homeStack";
import AuthStack from "./routes/authStack";
import store from "./store";
import { Provider } from "react-redux";
import { loadFonts } from "./constants";

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(null);
    useEffect(() => {
        const bootstrapAsync = async () => {
            try {
                const storedToken = await AsyncStorage.getItem("token");
                setUserToken(storedToken);
            } catch (e) {
                // Handle error, e.g., show a message to the user
            } finally {
                setIsLoading(false);
            }
        };

        bootstrapAsync();
    }, []);

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
                {userToken ? <HomeStack /> : <AuthStack />}
            </NavigationContainer>
        </Provider>
    );
}

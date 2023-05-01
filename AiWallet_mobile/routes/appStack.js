import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeStack from "./homeStack";
import AuthStack from "./authStack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ROUTES } from "../constants";

const Stack = createStackNavigator();

function AppStack() {
    const [userToken, setUserToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const bootstrapAsync = async () => {
            try {
                const storedToken = await AsyncStorage.getItem("token");
                setUserToken(storedToken);
            } catch (e) {
                // Handle error
            } finally {
                setIsLoading(false);
            }
        };

        bootstrapAsync();
    }, []);
    if (isLoading) {
        return null;
    }

    return (
        <Stack.Navigator
            initialRouteName={userToken ? ROUTES.HOME_STACK : ROUTES.AUTH}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name={ROUTES.AUTH} component={AuthStack} />
            <Stack.Screen name={ROUTES.HOME_STACK} component={HomeStack} />
        </Stack.Navigator>
    );
}

export default AppStack;

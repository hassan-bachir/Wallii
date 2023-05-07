import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeStack from "./homeStack";
import AuthStack from "./authStack";
import Admin from "../screens/admin/AdminScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ROUTES } from "../constants";
import { setAuthToken, getUserInfo } from "../api/api";

const Stack = createStackNavigator();

function AppStack() {
    const [userToken, setUserToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const bootstrapAsync = async () => {
            try {
                const storedToken = await AsyncStorage.getItem("token");
                setUserToken(storedToken);
                await setAuthToken();

                if (storedToken) {
                    const userInfo = await getUserInfo();
                    setUserRole(userInfo.role);
                }
            } catch (e) {
                console.log("error:", e);
            } finally {
                setIsLoading(false);
            }
        };

        bootstrapAsync();
    }, []);
    if (isLoading) {
        return null;
    }

    const initialRoute = () => {
        if (!userToken) return ROUTES.AUTH;
        if (userRole === "admin") return ROUTES.ADMIN_SCREEN;
        return ROUTES.HOME_STACK;
    };
    return (
        <Stack.Navigator
            initialRouteName={initialRoute()}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name={ROUTES.AUTH} component={AuthStack} />
            <Stack.Screen name={ROUTES.HOME_STACK} component={HomeStack} />
            <Stack.Screen name={ROUTES.ADMIN_SCREEN} component={Admin} />
        </Stack.Navigator>
    );
}

export default AppStack;

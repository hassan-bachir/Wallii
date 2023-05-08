import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeStack from "./homeStack";
import AuthStack from "./authStack";
import AdminStack from "./adminStack";
import Admin from "../screens/admin/AdminScreen";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { ROUTES } from "../constants";
import { setAuthToken, getUserInfo } from "../api/api";

const Stack = createStackNavigator();

function AppStack() {
    const [userToken, setUserToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [userRole, setUserRole] = useState(null);
    const [initialRoute, setInitialRoute] = useState("");

    useEffect(() => {
        const bootstrapAsync = async () => {
            try {
                const storedToken = await AsyncStorage.getItem("token");
                setUserToken(storedToken);
                await setAuthToken();

                if (storedToken) {
                    const userInfo = await getUserInfo();
                    setUserRole(userInfo.role);
                    console.log(userInfo);
                }
            } catch (e) {
                console.log("error:", e);
            } finally {
                setIsLoading(false);
            }
        };

        bootstrapAsync();
    }, []);

    useEffect(() => {
        const updateInitialRoute = () => {
            if (!userToken) {
                setInitialRoute(ROUTES.AUTH);
            } else if (userRole === "admin") {
                setInitialRoute(ROUTES.ADMIN_STACK);
            } else if (userRole) {
                setInitialRoute(ROUTES.HOME_STACK);
            }
        };
        updateInitialRoute();
    }, [userToken, userRole]);

    if (isLoading || !initialRoute) {
        return null;
    }

    return (
        <Stack.Navigator
            initialRouteName={initialRoute}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name={ROUTES.AUTH} component={AuthStack} />
            <Stack.Screen name={ROUTES.HOME_STACK} component={HomeStack} />
            <Stack.Screen name={ROUTES.ADMIN_STACK} component={AdminStack} />
        </Stack.Navigator>
    );
}

export default AppStack;

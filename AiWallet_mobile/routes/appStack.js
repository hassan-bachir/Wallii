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
    return (
        <Stack.Navigator
            initialRouteName={ROUTES.AUTH}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name={ROUTES.AUTH} component={AuthStack} />
            <Stack.Screen name={ROUTES.HOME_STACK} component={HomeStack} />
        </Stack.Navigator>
    );
}

export default AppStack;

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeStack from "./homeStack";
import AuthStack from "./authStack";
import { ROUTES } from "../constants";

const Stack = createStackNavigator();

function AppStack() {
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

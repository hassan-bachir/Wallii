import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS, ROUTES } from "../constants";
import { Admin, User } from "../screens";

const Stack = createStackNavigator();

function AdminStack() {
    return (
        <Stack.Navigator
            initialRouteName={ROUTES.ADMIN_SCREEN}
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.primary,
                },
                headerTitleStyle: {
                    fontWeight: "bold",
                    color: COLORS.white,
                },

                headerTintColor: "#fff",
            }}
        >
            <Stack.Screen name={ROUTES.ADMIN_SCREEN} component={Admin} />
            <Stack.Screen name={ROUTES.USER_SCREEN} component={User} />
        </Stack.Navigator>
    );
}

export default AdminStack;

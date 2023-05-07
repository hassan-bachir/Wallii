import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS, ROUTES } from "../constants";
import { Admin, User } from "../screens";

const Stack = createStackNavigator();

function AdminStack() {
    <Stack.Navigator initialRouteName={ROUTES.HOME}>
        <Stack.Screen
            name={ROUTES.ADMIN_SCREEN}
            component={Admin}
            // options={{
            //     headerShown: false,
            // }}
        />
        <Stack.Screen name={ROUTES.USER_SCREEN} component={User} />
    </Stack.Navigator>;
}

export default AdminStack;

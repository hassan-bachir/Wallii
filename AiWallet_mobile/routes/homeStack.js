import React, { useState, useCallback, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
    Home,
    HomeSettings,
    AddIncome,
    AddExpense,
    UpdateIncome,
    UpdateExpense,
    Goals,
    AiAdvisor,
} from "../screens";
import { COLORS, ROUTES } from "../constants";
import BottomTabNavigator from "./bottomTabNavigator";
import { getUserInfo } from "../api/api";
import AdminStack from "./adminStack";
const Stack = createStackNavigator();

function HomeStack() {
    const [userRole, setUserRole] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchUserRole = useCallback(async () => {
        try {
            const data = await getUserInfo();

            setUserRole(data.role);
        } catch (error) {
            console.error("Error fetching user role:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchUserRole();
    }, [fetchUserRole]);

    if (loading) {
        return null;
    }
    return (
        <Stack.Navigator
            initialRouteName={
                userRole === "admin" ? ROUTES.ADMIN_STACK : ROUTES.HOME
            }
        >
            <Stack.Screen
                name={ROUTES.HOME}
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name={ROUTES.ADMIN_STACK}
                component={AdminStack}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name={ROUTES.HOME_SETTINGS}
                component={HomeSettings}
            />
            <Stack.Screen
                name={ROUTES.BOTTOM_TAB}
                component={BottomTabNavigator}
                options={{
                    headerTitle: "Wallet",
                    headerTintColor: COLORS.white,
                    headerStyle: {
                        backgroundColor: COLORS.primary,
                    },
                }}
            />
            <Stack.Screen
                name={ROUTES.ADD_INCOME}
                component={AddIncome}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name={ROUTES.ADD_EXPENSE}
                component={AddExpense}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name={ROUTES.AI_ADVISOR}
                component={AiAdvisor}
                options={{
                    headerTintColor: COLORS.white,
                    headerStyle: {
                        backgroundColor: COLORS.secondary,
                    },
                    headerTitle: "",
                }}
            />
            <Stack.Screen
                name={ROUTES.UPDATE_INCOME}
                component={UpdateIncome}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name={ROUTES.UPDATE_EXPENSE}
                component={UpdateExpense}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name={ROUTES.GOALS}
                component={Goals}
                options={{
                    headerTitle: "Goals",
                    headerTintColor: COLORS.white,
                    headerStyle: {
                        backgroundColor: COLORS.primary,
                    },
                }}
            />
        </Stack.Navigator>
    );
}

export default HomeStack;

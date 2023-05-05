import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WalletScreen from "../screens/wallet/WalletScreen";
import WalletBudget from "../screens/wallet/WalletBudgetScreen";
import WalletStats from "../screens/wallet/WalletStatsScreen";
import WalletSettings from "../screens/wallet/WalletSettingsScreen";
import { ROUTES } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/FontAwesome"; // Example: using FontAwesome icons
const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator
            initialRouteName={ROUTES.WALLET}
            screenOptions={{
                headerShown: false,
            }}
        >
            <BottomTab.Screen
                name={ROUTES.WALLET}
                component={WalletScreen}
                options={{
                    tabBarLabel: "Wallet",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                }}
            />
            <BottomTab.Screen
                name={ROUTES.WALLET_STATS}
                component={WalletStats}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="chart-bar"
                            color={color}
                            size={size}
                        />
                    ),
                    tabBarLabel: "Stats",
                }}
            />
            <BottomTab.Screen
                name={ROUTES.WALLET_BUDGET}
                component={WalletBudget}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        // <Icon name="home" color={color} size={size} />
                        <MaterialCommunityIcons
                            name="wallet"
                            color={color}
                            size={size}
                        />
                    ),
                    tabBarLabel: "Budget",
                }}
            />
            <BottomTab.Screen
                name={ROUTES.WALLET_SETTINGS}
                component={WalletSettings}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="cog"
                            color={color}
                            size={size}
                        />
                    ),
                    tabBarLabel: "Settings",
                }}
            />
        </BottomTab.Navigator>
    );
};

export default BottomTabNavigator;

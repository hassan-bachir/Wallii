import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WalletScreen from "../screens/wallet/WalletScreen";
import WalletBudget from "../screens/wallet/WalletBudgetScreen";
import WalletStats from "../screens/wallet/WalletStatsScreen";
import WalletSettings from "../screens/wallet/WalletSettingsScreen";
import { ROUTES } from "../constants";
import { Ionicons } from "@expo/vector-icons";

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
                    tabBarIcon: () => (
                        <View
                            style={{
                                width: 30,
                                height: 30,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Ionicons name="cash" color="black" size={30} />
                        </View>
                    ),
                }}
            />
            <BottomTab.Screen
                name={ROUTES.WALLET_STATS}
                component={WalletStats}
                options={{
                    tabBarLabel: "Other",
                }}
            />
            <BottomTab.Screen
                name={ROUTES.WALLET_BUDGET}
                component={WalletBudget}
                options={{
                    tabBarLabel: "Other",
                }}
            />
            <BottomTab.Screen
                name={ROUTES.WALLET_SETTINGS}
                component={WalletSettings}
                options={{
                    tabBarLabel: "Other",
                }}
            />
        </BottomTab.Navigator>
    );
};

export default BottomTabNavigator;

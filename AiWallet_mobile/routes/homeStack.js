import { createStackNavigator } from "@react-navigation/stack";
import {
    Home,
    HomeSettings,
    AddIncome,
    AddExpense,
    UpdateIncome,
    UpdateExpense,
    Goals,
} from "../screens";
import WalletScreen from "../screens/wallet/WalletScreen";
import { COLORS, ROUTES } from "../constants";
import BottomTabNavigator from "./bottomTabNavigator";

const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator initialRouteName={ROUTES.HOME}>
            <Stack.Screen
                name={ROUTES.HOME}
                component={Home}
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

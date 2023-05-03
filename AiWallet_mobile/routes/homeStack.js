import { createStackNavigator } from "@react-navigation/stack";
import { Home, HomeSettings, TransactionScreen } from "../screens";
import WalletScreen from "../screens/wallet/WalletScreen";
import { COLORS, ROUTES } from "../constants";

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
                name={ROUTES.WALLET}
                component={WalletScreen}
                options={{
                    headerTintColor: COLORS.white,
                    headerStyle: {
                        backgroundColor: COLORS.primary,
                    },
                }}
            />
            <Stack.Screen
                name={ROUTES.TRANSACTION_SCREEN}
                component={TransactionScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}

export default HomeStack;

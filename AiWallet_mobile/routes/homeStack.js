import { createStackNavigator } from "@react-navigation/stack";
import { Home, HomeSettings } from "../screens";
import WalletScreen from "../screens/wallet/WalletScreen";

import { ROUTES } from "../constants";

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
            <Stack.Screen name="WalletDetails" component={WalletScreen} />
        </Stack.Navigator>
    );
}

export default HomeStack;

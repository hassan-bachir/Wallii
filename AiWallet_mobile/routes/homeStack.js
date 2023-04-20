import { createStackNavigator } from "@react-navigation/stack";
import { Home, HomeSettings } from "../screens";
import { ROUTES } from "../constants";

const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator initialRouteName={ROUTES.HOME}>
            <Stack.Screen name={ROUTES.HOME} component={Home} />
            <Stack.Screen
                name={ROUTES.HOME_SETTINGS}
                component={HomeSettings}
            />
        </Stack.Navigator>
    );
}

export default HomeStack;

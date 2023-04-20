import { createStackNavigator } from "@react-navigation/stack";
import {
    Login,
    Welcome,
    ChooseAdvisor,
    ChooseName,
    ChooseEmail,
} from "../screens";
import { ROUTES } from "../constants";

const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator initialRouteName={ROUTES.WELCOME}>
            <Stack.Screen name={ROUTES.WELCOME} component={Welcome} />
            <Stack.Screen name={ROUTES.LOGIN} component={Login} />
        </Stack.Navigator>
    );
}

export default HomeStack;

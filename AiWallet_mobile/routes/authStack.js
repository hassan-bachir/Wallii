import { createStackNavigator } from "@react-navigation/stack";
import { Login, Welcome, ChooseAdvisor, Register } from "../screens";
import { ROUTES } from "../constants";

const Stack = createStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator
            initialRouteName={ROUTES.WELCOME}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name={ROUTES.WELCOME} component={Welcome} />
            <Stack.Screen name={ROUTES.LOGIN} component={Login} />
            <Stack.Screen
                name={ROUTES.CHOOSE_ADVISOR}
                component={ChooseAdvisor}
            />
            <Stack.Screen name={ROUTES.REGISTER} component={Register} />
        </Stack.Navigator>
    );
}

export default AuthStack;

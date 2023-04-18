import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "../screens/Register/WelcomeScreen1";
import ChooseAdvisor from "../screens/Register/ChooseAdvisorScreen2";
import ChooseName from "../screens/Register/ChooseNameScreen3";
import ChooseEmail from "../screens/Register/ChooseEmailScreen4";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Welcome from "../screens/Register/WelcomeScreen1";
import ChooseAdvisor from "../screens/Register/ChooseAdvisorScreen2";
import ChooseName from "../screens/Register/ChooseNameScreen3";
import ChooseEmail from "../screens/Register/ChooseEmailScreen4";

const screens = {
    Welcome: {
        screen: Welcome,
    },
    ChooseAdvisor: {
        screen: ChooseAdvisor,
    },
    ChooseName: {
        screen: ChooseName,
    },
    ChooseEmail: {
        screen: ChooseEmail,
    },
};
const RegisterStack = createStackNavigator(screens);

export default createAppContainer(RegisterStack);

// const Stack = createStackNavigator();

// function RegisterStack() {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name="Welcome" component={Welcome} />
//                 <Stack.Screen name="ChooseAdvisor" component={ChooseAdvisor} />
//                 <Stack.Screen name="ChooseName" component={ChooseName} />
//                 <Stack.Screen name="ChooseEmail" component={ChooseEmail} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }
// export default RegisterStack;

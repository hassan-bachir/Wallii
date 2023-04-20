import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyles } from "../../../styles/global";
import { ROUTES } from "../../../constants";

export default function ChooseAdvisor({ navigation }) {
    const navigateToChooseName = () => {
        navigation.push(ROUTES.CHOOSE_NAME);
    };

    return (
        <View style={globalStyles.container}>
            <Text>Choose Advisor Screen</Text>
            <Button title="Next" onPress={navigateToChooseName} />
        </View>
    );
}

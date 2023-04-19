import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../../../styles/global";

export default function ChooseAdvisor({ navigation }) {
    const pressHandler = () => {
        navigation.push("ChooseName");
    };
    return (
        <View style={globalStyles.container}>
            <Text>Choose Advisor Screen</Text>
            <Button title="Next" onPress={pressHandler}></Button>
        </View>
    );
}

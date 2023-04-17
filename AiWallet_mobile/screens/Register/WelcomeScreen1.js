import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../../styles/global";

export default function Welcome({ navigation }) {
    const pressHandler = () => {
        navigation.push("ChooseAdvisor");
    };

    return (
        <View style={globalStyles.container}>
            <Text>Welcome Screen</Text>
            <Button title="Next" onPress={pressHandler}></Button>
        </View>
    );
}

import React from "react";
import { View, SafeAreaView } from "react-native";
import { globalStyles } from "../../../styles/global";
import { ROUTES } from "../../../constants";
import { Background, Button } from "../../../components";

export default function Register({ navigation }) {
    return (
        <Background>
            <View style={globalStyles.container}>
                <Button title="Done"></Button>
            </View>
        </Background>
    );
}

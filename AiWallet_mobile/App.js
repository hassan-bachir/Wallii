import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
    console.log("sup");
    return (
        <View style={styles.container}>
            <View style={styles.hassan}>
                <Text>hassan bachir</Text>
            </View>
            <Text>hassan bachir</Text>
            <Button title="hello " />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    hassan: {
        margin: 16,
        padding: 16,
        borderWidth: 2,
        borderColor: "red",
    },
});

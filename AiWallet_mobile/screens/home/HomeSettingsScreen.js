import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { ROUTES, FONTS, COLORS, SIZES, IMAGES } from "../../constants";
import { Button, Background } from "../../components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { updateUserInfo, getUserInfo } from "../../api/api";

export default function HomeSettings({ navigation }) {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [aiAdvisorName, setAiAdvisorName] = useState("");

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const userInfo = await getUserInfo();
                setName(userInfo.name || "");
                setLastName(userInfo.lastName || "");
                setAiAdvisorName(userInfo.aiAdvisorName || "");
            } catch (error) {
                console.error("Error fetching user info:", error);
            }
        };
        fetchUserInfo();
    }, []);

    const handleUpdateUser = async () => {
        try {
            const updatedUserData = { name, lastName, aiAdvisorName };
            await updateUserInfo(updatedUserData);
            navigation.goBack();
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    const handleSignOut = async () => {
        try {
            await AsyncStorage.removeItem("token");
            navigation.reset({
                index: 0,
                routes: [{ name: ROUTES.AUTH }],
            });
        } catch (error) {
            console.error("Error during sign out:", error);
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Update User Info</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Last Name</Text>
                <TextInput
                    style={styles.input}
                    value={lastName}
                    onChangeText={setLastName}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>AI Advisor Name</Text>
                <TextInput
                    style={styles.input}
                    value={aiAdvisorName}
                    onChangeText={setAiAdvisorName}
                />
            </View>
            <Button
                title="Update User"
                onPress={handleUpdateUser}
                backgroundColor={COLORS.primary}
            />
            <Button title="Sign Out" onPress={handleSignOut} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SIZES.padding,
    },
    title: {
        ...FONTS.h3,
        textAlign: "center",
        marginTop: 20,
        marginBottom: 10,
        color: COLORS.primary,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        ...FONTS.body2,
        color: COLORS.primary,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 5,
        padding: 10,
        color: COLORS.primary,
        ...FONTS.body3,
    },
});

import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import {
    getInfoByID,
    updateUserByAdmin,
    deleteUserByAdmin,
} from "../../api/api";
import styles from "./userScreen.styles";

const User = ({ route, navigation }) => {
    const { userId } = route.params;
    const [userInfo, setUserInfo] = useState(null);

    const handleChange = (field, value) => {
        setUserInfo({
            ...userInfo,
            [field]: value,
        });
    };

    const handleSubmit = async () => {
        try {
            await updateUserByAdmin(userId, userInfo);
            navigation.goBack();
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };
    const assignAdminAndUpdateUser = async () => {
        handleChange("role", "admin");
        await handleSubmit();
    };

    const handleAssignAdmin = () => {
        Alert.alert(
            "Confirm Assign",
            "Are you sure you want to make this user an admin?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                },
                {
                    text: "Assign",
                    onPress: assignAdminAndUpdateUser,
                },
            ]
        );
    };

    const handleDelete = async () => {
        Alert.alert(
            "Confirm Delete",
            "Are you sure you want to delete this user?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                },
                {
                    text: "Delete",
                    onPress: async () => {
                        try {
                            await deleteUserByAdmin(userId);
                            navigation.goBack();
                        } catch (error) {
                            console.error("Error deleting user:", error);
                        }
                    },
                },
            ]
        );
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await getInfoByID(userId);
                setUserInfo(data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, [userId]);

    if (!userInfo) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={styles.title}>update info</Text>
                <TextInput
                    style={styles.input}
                    value={userInfo.name}
                    onChangeText={(text) => handleChange("name", text)}
                    placeholder="Name"
                />
                <TextInput
                    style={styles.input}
                    value={userInfo.lastName}
                    onChangeText={(text) => handleChange("lastName", text)}
                    placeholder="Last Name"
                />
                <TextInput
                    style={styles.input}
                    value={userInfo.email}
                    onChangeText={(text) => handleChange("email", text)}
                    placeholder="Email"
                />
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={styles.assignAdminButton}
                        onPress={handleAssignAdmin}
                    >
                        <Text style={styles.assignAdminButtonText}>
                            Assign Admin
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.submitButtonText}>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.deleteButton}
                        onPress={handleDelete}
                    >
                        <Text style={styles.deleteButtonText}>Delete User</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default User;

import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import { Card, SearchBar } from "react-native-elements";
import { getAllUsers } from "../../api/api";
import { ROUTES } from "../../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "../../components";
import { useFocusEffect } from "@react-navigation/native";
import styles from "./AdminScreen.styles";

const Admin = ({ navigation }) => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);

    const fetchData = async () => {
        const fetchedUsers = await getAllUsers();

        const nonAdminUsers = fetchedUsers.filter(
            (user) => user.role !== "admin"
        );
        setUsers(nonAdminUsers);
        setFilteredUsers(nonAdminUsers);
    };

    const handleSignOut = async () => {
        Alert.alert("Confirm Sign Out", "Are you sure you want to sign out?", [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
            },
            {
                text: "Sign Out",
                onPress: async () => {
                    try {
                        await AsyncStorage.removeItem("token");
                        navigation.reset({
                            index: 0,
                            routes: [{ name: ROUTES.AUTH }],
                        });
                    } catch (error) {
                        console.error("Error during sign out:", error);
                    }
                },
            },
        ]);
    };

    const handleSearch = (text) => {
        setSearch(text);
        if (text === "") {
            setFilteredUsers(users);
        } else {
            const filtered = users.filter((user) =>
                `${user.name} ${user.lastName} ${user.email}`
                    .toLowerCase()
                    .includes(text.toLowerCase())
            );
            setFilteredUsers(filtered);
        }
    };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate(ROUTES.USER_SCREEN, {
                        userId: item._id,
                    })
                }
            >
                <Card>
                    <Card.Title>{`${item.name} ${item.lastName}`}</Card.Title>
                    <Text style={styles.email}>{item.email}</Text>
                </Card>
            </TouchableOpacity>
        );
    };

    useFocusEffect(
        React.useCallback(() => {
            fetchData();
            return () => {};
        }, [])
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ADMIN SCREEN</Text>
            <SearchBar
                placeholder="Search by name or email..."
                onChangeText={handleSearch}
                value={search}
                lightTheme
                round
            />
            <FlatList
                data={filteredUsers}
                renderItem={renderItem}
                keyExtractor={(item) =>
                    item._id ? item._id : Math.random().toString()
                }
            />
            <Button title="Sign Out" onPress={handleSignOut} />
        </View>
    );
};

export default Admin;

import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
} from "react-native";
import { Card, SearchBar } from "react-native-elements";
import { getAllUsers } from "../../api/api";
import { COLORS, ROUTES, SIZES } from "../../constants";

const Admin = ({ navigation }) => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const fetchedUsers = await getAllUsers();
        console.log(fetchedUsers);
        setUsers(fetchedUsers);
        setFilteredUsers(fetchedUsers);
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
                    navigation.navigate(ROUTES.USER_SCREEN, { userId: item.id })
                }
            >
                <Card>
                    <Card.Title>{`${item.name} ${item.lastName}`}</Card.Title>
                    <Text style={styles.email}>{item.email}</Text>
                </Card>
            </TouchableOpacity>
        );
    };

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
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: SIZES.padding,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
        textAlign: "center",
    },
    email: {
        fontSize: 16,
        marginBottom: 8,
        color: COLORS.darkGray,
        textAlign: "center",
    },
});

export default Admin;

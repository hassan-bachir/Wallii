import React, { useEffect, useState, useCallback } from "react";
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    FlatList,
    Modal,
    TextInput,
    TouchableOpacity,
} from "react-native";
import {
    Button,
    Background,
    FinanceSummaryBanner,
    AddWalletButton,
    WalletCard,
} from "../../components";
import { Ionicons } from "@expo/vector-icons";
import { ROUTES, FONTS, COLORS, SIZES, IMAGES } from "../../constants";
import { getUserWallets, getWalletSummary, addWallet } from "../../api/api";
import { useFocusEffect } from "@react-navigation/native";

export default function Home({ navigation }) {
    const [wallets, setWallets] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [newWalletName, setNewWalletName] = useState("");

    const fetchData = useCallback(async () => {
        try {
            const fetchedWallets = await getUserWallets();
            const walletsWithSummary = await Promise.all(
                fetchedWallets.map(async (wallet) => {
                    const summary = await getWalletSummary(wallet._id);
                    return { ...wallet, ...summary };
                })
            );
            setWallets(walletsWithSummary);
        } catch (error) {
            console.error("Error fetching wallets and summaries:", error);
        }
    }, []);

    useFocusEffect(
        useCallback(() => {
            fetchData();
            return () => {};
        }, [fetchData])
    );

    const navigateToHomeSettings = () => {
        navigation.navigate(ROUTES.HOME_SETTINGS);
    };
    const handleSaveWallet = async () => {
        try {
            await addWallet({ name: newWalletName });
            fetchData();
            setNewWalletName("");
            setModalVisible(false);
        } catch (error) {
            console.error("Error adding wallet:", error);
        }
    };
    const handleAddWalletPress = () => {
        setModalVisible(true);
    };

    return (
        <Background image={IMAGES.HOMEBACKGROUND}>
            <SafeAreaView style={styles.Safe}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Wallets</Text>
                    <Ionicons
                        name="ios-settings"
                        size={32}
                        color="white"
                        onPress={navigateToHomeSettings}
                    />
                </View>
                <FinanceSummaryBanner />
                <AddWalletButton onPress={handleAddWalletPress} />
                <FlatList
                    data={wallets}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <WalletCard
                            name={item.name}
                            totalIncome={item.totalIncome}
                            totalExpenses={item.totalExpenses}
                        />
                    )}
                    contentContainerStyle={styles.walletList}
                />
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isModalVisible}
                    onRequestClose={() => {
                        setModalVisible(!isModalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TextInput
                                placeholder="Enter wallet name"
                                value={newWalletName}
                                onChangeText={setNewWalletName}
                                style={styles.input}
                            />
                            <TouchableOpacity
                                onPress={handleSaveWallet}
                                style={styles.saveButton}
                            >
                                <Text style={styles.saveButtonText}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        </Background>
    );
}

const styles = StyleSheet.create({
    Safe: {
        paddingTop: 20,
    },
    header: {
        marginTop: 20,
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headerText: {
        ...FONTS.h1,
        color: COLORS.white,
    },
    headerText: {
        ...FONTS.h1,
        color: COLORS.white,
    },
    walletList: {
        paddingHorizontal: SIZES.padding,
        paddingTop: SIZES.base,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        width: "100%",
        borderRadius: SIZES.radius,
        marginBottom: SIZES.padding,
        paddingHorizontal: SIZES.padding,
    },
    saveButton: {
        backgroundColor: COLORS.secondary,
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.base,
        borderRadius: SIZES.radius,
    },
    saveButtonText: {
        ...FONTS.h3,
        color: COLORS.white,
    },
});

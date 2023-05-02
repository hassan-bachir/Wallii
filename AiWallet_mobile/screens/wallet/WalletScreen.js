import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Background, WalletCard, AddWalletButton } from "../../components";
import { IMAGES } from "../../constants";

import { getWallet, getWalletSummary } from "../../api/api";

const WalletScreen = ({ route }) => {
    const { walletId } = route.params;
    const [wallet, setWallet] = useState(null);

    useEffect(() => {
        const fetchWallet = async () => {
            try {
                const fetchedWallet = await getWalletSummary(walletId);
                setWallet(fetchedWallet);
            } catch (error) {
                console.error("Error fetching wallet:", error);
            }
        };

        fetchWallet();
    }, [walletId]);

    return (
        <Background image={IMAGES.HOMEBACKGROUND}>
            <View style={styles.walletCard}>
                {wallet && (
                    <WalletCard
                        walletId={wallet._id}
                        name={wallet.name}
                        totalIncome={wallet.totalIncome}
                        totalExpenses={wallet.totalExpenses}
                    />
                )}
            </View>
            <AddWalletButton buttonText="Add Transaction" />
        </Background>
    );
};
const styles = StyleSheet.create({
    walletCard: {
        marginHorizontal: 10,
    },
});

export default WalletScreen;

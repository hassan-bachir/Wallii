import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Background, WalletCard } from "../../components";
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
            {wallet && (
                <WalletCard
                    walletId={wallet._id}
                    name={wallet.name}
                    totalIncome={wallet.totalIncome}
                    totalExpenses={wallet.totalExpenses}
                />
            )}
        </Background>
    );
};

export default WalletScreen;

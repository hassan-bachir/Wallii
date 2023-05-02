import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
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
            {wallet && (
                <WalletCard
                    walletId={wallet._id}
                    name={wallet.name}
                    totalIncome={wallet.totalIncome}
                    totalExpenses={wallet.totalExpenses}
                />
            )}
            <AddWalletButton buttonText="Add Transaction" />
        </Background>
    );
};

export default WalletScreen;

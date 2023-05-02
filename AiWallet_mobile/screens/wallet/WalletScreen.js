import React from "react";
import { View, Text } from "react-native";

const WalletScreen = ({ route }) => {
    const { walletId } = route.params;

    return (
        <View>
            <Text>Wallet ID: {walletId}</Text>
            {/* Rest of the WalletScreen component */}
        </View>
    );
};

export default WalletScreen;

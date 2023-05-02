import React from "react";
import {
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Modal,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const AddWalletModal = ({
    isModalVisible,
    setModalVisible,
    newWalletName,
    setNewWalletName,
    handleSaveWallet,
}) => {
    return (
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
    );
};
const styles = StyleSheet.create({
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
export default AddWalletModal;

import React from "react";
import {
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Modal,
    Text,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const handleCancel = () => {
    setModalVisible(false);
};

const AddWalletModal = ({
    isModalVisible,
    setModalVisible,
    newWalletName,
    setNewWalletName,
    handleSaveWallet,
}) => {
    const handleCancel = () => {
        setModalVisible(false);
    };

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
                    <TouchableOpacity
                        onPress={handleCancel}
                        style={styles.cancelButton}
                    >
                        <Text style={styles.cancelButtonText}>Cancel</Text>
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
        width: "90%",
        backgroundColor: "white",
        borderRadius: 20,
        paddingVertical: 35,
        paddingHorizontal: 0,
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
        borderBottomColor: COLORS.secondary,
        borderBottomWidth: 1,
        width: "90%",
        borderRadius: 0,
        marginBottom: 50,
        paddingHorizontal: SIZES.padding,
    },

    saveButton: {
        width: "90%",
        backgroundColor: COLORS.primary,
        paddingVertical: SIZES.base,
        borderRadius: SIZES.radius,
        alignItems: "center",
    },
    saveButtonText: {
        ...FONTS.h3,
        color: COLORS.white,
    },
    cancelButton: {
        width: "90%",
        backgroundColor: COLORS.secondary,
        paddingVertical: SIZES.base,
        borderRadius: SIZES.radius,
        marginTop: SIZES.base,
        alignItems: "center",
    },
    cancelButtonText: {
        ...FONTS.h3,
        color: COLORS.white,
    },
});
export default AddWalletModal;

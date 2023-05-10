import React from "react";
import { View, TextInput, TouchableOpacity, Modal, Text } from "react-native";
import { COLORS } from "../../constants";
import styles from "./AddWalletModal.styles";

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

    const isSaveButtonDisabled = newWalletName.trim() === "";

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
                        style={[
                            styles.saveButton,
                            isSaveButtonDisabled && {
                                backgroundColor: COLORS.gray,
                            },
                        ]}
                        disabled={isSaveButtonDisabled}
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

export default AddWalletModal;

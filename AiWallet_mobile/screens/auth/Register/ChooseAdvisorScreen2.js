import React from "react";
import { View, TouchableOpacity, SafeAreaView, Text } from "react-native";
import {
    Background,
    Button,
    AdvisorCard,
    Container,
} from "../../../components";
import { ROUTES, IMAGES } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedAdvisor } from "../../../store/slices/registrationSlice";
import styles from "./ChooseAdvisorScreen2.styles";

const advisors = [
    { id: 1, name: "Elon Musk", image: IMAGES.ELONMUSK },
    { id: 2, name: "Robert Kiyosaki", image: IMAGES.ROBERTKIYOSAKI },
    { id: 3, name: "Warren Buffet", image: IMAGES.WARRENBUFFET },
    { id: 4, name: "Bill Gates", image: IMAGES.BILLGATES },
    { id: 5, name: "ChatGPT", image: IMAGES.CHATGPT },
    { id: 6, name: "other", image: IMAGES.ANIKA },
];

export default function ChooseAdvisor({ navigation }) {
    const dispatch = useDispatch();

    const handleSelectAdvisor = (advisor) => {
        dispatch(setSelectedAdvisor(advisor.name));
    };
    const selectedAdvisor = useSelector(
        (state) => state.registration.aiAdvisorName
    );
    const navigateToChooseName = () => {
        navigation.push(ROUTES.REGISTER);
    };

    const navigateBackToWelcome = () => {
        navigation.goBack();
    };
    const isNextButtonDisabled = !selectedAdvisor;
    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Container>
                    <Text style={styles.chooseAdvisorText}>
                        Choose your favorite AI advisor
                    </Text>
                    <View style={styles.cardsContainer}>
                        {advisors.map((advisor) => (
                            <AdvisorCard
                                key={advisor.id}
                                advisor={advisor}
                                onPress={() => handleSelectAdvisor(advisor)}
                                isSelected={selectedAdvisor === advisor.name}
                            />
                        ))}
                    </View>
                    <View style={styles.buttonsContainer}>
                        <Button
                            title="Next"
                            onPress={navigateToChooseName}
                            disabled={isNextButtonDisabled}
                        />
                        <TouchableOpacity onPress={navigateBackToWelcome}>
                            <Text style={styles.goBackLink}>
                                Back to Welcome
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Container>
            </SafeAreaView>
        </Background>
    );
}

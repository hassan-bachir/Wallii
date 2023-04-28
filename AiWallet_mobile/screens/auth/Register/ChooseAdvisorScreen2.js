import React from "react";
import {
    View,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    Text,
    Image,
} from "react-native";
import {
    Background,
    Button,
    AdvisorCard,
    Container,
} from "../../../components";
import { globalStyles } from "../../../styles/global";
import { ROUTES, FONTS, COLORS, IMAGES } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedAdvisor } from "../../../store/slices/registrationSlice";

const advisors = [
    { id: 1, name: "Elon Musk", image: IMAGES.ELONMUSK },
    { id: 2, name: "Robert Kiyosaki", image: IMAGES.ROBERTKIYOSAKI },
    { id: 3, name: "Warren Buffet", image: IMAGES.WARRENBUFFET },
    { id: 4, name: "Bill Gates", image: IMAGES.BILLGATES },
    { id: 5, name: "ChatGPT", image: IMAGES.CHATGPT },
    { id: 6, name: "default", image: IMAGES.ANIKA },
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
        navigation.push(ROUTES.CHOOSE_NAME);
    };

    const navigateBackToWelcome = () => {
        navigation.goBack();
    };

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Container>
                    <View style={styles.cardsContainer}>
                        {advisors.map((advisor) => (
                            <AdvisorCard
                                key={advisor.id}
                                advisor={advisor}
                                onPress={() => handleSelectAdvisor(advisor)}
                            />
                        ))}
                    </View>
                    <View style={styles.buttonsContainer}>
                        <Text>{selectedAdvisor}</Text>
                        <Button title="Next" onPress={navigateToChooseName} />
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 20,
    },
    buttonsContainer: {
        justifyContent: "center",
        marginBottom: 20,
    },
    goBackLink: {
        ...FONTS.body3,
        color: COLORS.white,
        textAlign: "center",
        textDecorationLine: "underline",
        marginTop: 10,
    },
});

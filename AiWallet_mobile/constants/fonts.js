import * as Font from "expo-font";

const loadFonts = () =>
    Font.loadAsync({
        "Montserrat-regular": require("../assets/fonts/MontserratAlternates-Regular.ttf"),
        "Montserrat-medium": require("../assets/fonts/MontserratAlternates-Medium.ttf"),
        "Montserrat-italic": require("../assets/fonts/MontserratAlternates-Italic.ttf"),
        "Montserrat-semiBold": require("../assets/fonts/MontserratAlternates-SemiBold.ttf"),
        "Montserrat-bold": require("../assets/fonts/MontserratAlternates-Bold.ttf"),
    });

export default loadFonts;

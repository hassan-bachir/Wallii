import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "#35BBB3",
    secondary: "#FF4F8E",

    darkgreen: "#00E36A",
    green: "#66D59A",
    lightGreen: "#E6FEF0",

    lime: "#00BA63",
    emerald: "#2BC978",

    darkred: "#D0342A",
    red: "#FF4134",
    lightRed: "#FFF1F0",

    purple: "#6B3CE9",
    lightpurple: "#F3EFFF",

    yellow: "#FFC664",
    lightyellow: "#FFF9EC",

    orange: "#F05700",

    black: "#1E1F20",
    white: "#FFFFFF",

    lightGray: "#FBFBFB",
    gray: "#C1C3C5",
    darkgray: "#C3C6C7",

    transparent: "transparent",
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height,
};

export const FONTS = {
    largeTitle: {
        fontFamily: "Roboto-regular",
        fontSize: SIZES.largeTitle,
        lineHeight: 55,
    },
    h1: { fontFamily: "Montserrat-bold", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Montserrat-bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Montserrat-bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Montserrat-bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: {
        fontFamily: "Montserrat-medium",
        fontSize: SIZES.body1,
        lineHeight: 36,
    },
    body2: {
        fontFamily: "Montserrat-medium",
        fontSize: SIZES.body2,
        lineHeight: 30,
    },
    body3: {
        fontFamily: "Montserrat-medium",
        fontSize: SIZES.body3,
        lineHeight: 22,
    },
    body4: {
        fontFamily: "Montserrat-medium",
        fontSize: SIZES.body4,
        lineHeight: 22,
    },
    body5: {
        fontFamily: "Montserrat-medium",
        fontSize: SIZES.body5,
        lineHeight: 22,
    },
};
const theme = { COLORS, SIZES, FONTS };
export default theme;

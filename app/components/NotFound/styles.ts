import colors from "@/app/themes/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  errorWrapper: {
    justifyContent: "space-evenly",
    marginTop: 50,
    alignItems: "center",
    flexBasis: "75%",
  },
  errorImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  errorMessage: {
    fontSize: 30,
    textAlign: "center",
    color: colors.darkContrast,
  },
  tryAgainButton: {
    borderWidth: 1,
    borderColor: colors.darkContrast,
    borderRadius: 10,
    padding: 10,
  },
  pressedButton: {
    shadowColor: colors.darkContrast,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 1,
    shadowOpacity: 0.5,
  },
});

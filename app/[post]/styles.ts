import { StyleSheet } from "react-native";
import colors from "../themes/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    margin: 15,
    fontSize: 20,
    fontFamily: "SpaceMono-Regular",
    color: colors.darkContrast,
  },
});

import colors from "@/app/themes/colors";
import globalStyles from "@/app/themes/globalStyles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    ...globalStyles.pressableCard,
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  title: {
    fontWeight: "700",
    fontSize: 20,
    marginLeft: 10,
    marginRight: 30,
    color: colors.darkContrast,
  },
  body: {
    fontSize: 16,
    fontFamily: "SpaceMono-Regular",
    color: colors.regularText,
  },
});

import colors from "./colors";
import { top } from "../utils/constants";

export default {
  header: {
    wrapper: {
      backgroundColor: colors.darkContrast,
      borderRadius: 10,
      alignSelf: "flex-start",
      width: "50%",
      left: 20,
      top: top,
    },
    title: {
      paddingVertical: 6,
      paddingLeft: 15,
      color: colors.lightContrast,
      textAlign: "left",
      fontSize: 28,
      fontFamily: "SpaceMono-Regular",
    },
  },
  pressableCard: {
    padding: 10,
    borderWidth: 1,
    borderColor: colors.darkContrast,
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: colors.lightContrast,
  },
};

import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import { styles } from "./styles";

const copies = {
  title: "This is embarrassing...",
  subtitle: "Something went wrong.",
  button: "Please try again.",
};

interface Props {
  tryAgainPress: () => void;
}

const NotFound = ({ tryAgainPress }: Props) => (
  <View style={styles.errorWrapper}>
    <Text style={styles.errorMessage}>{copies.title}</Text>
    <Image
      source={require("../../../assets/images/error-img.gif")}
      style={styles.errorImage}
    />
    <Text style={styles.errorMessage}>{copies.subtitle}</Text>
    <Pressable
      onPress={tryAgainPress}
      style={({ pressed }) => {
        return pressed
          ? {
              ...styles.tryAgainButton,
              ...styles.pressedButton,
            }
          : styles.tryAgainButton;
      }}
    >
      <Text style={styles.errorMessage}>{copies.button}</Text>
    </Pressable>
  </View>
);

export default NotFound;

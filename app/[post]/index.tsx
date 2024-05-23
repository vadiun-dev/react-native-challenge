import React from "react";
import { View, Text } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { capitalizeFirstLetter } from "../utils/helpers";
import colors from "../themes/colors";
import { styles } from "./styles";

const PostDetailsPage = () => {
  const { title, body } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: capitalizeFirstLetter(title as string),
          headerTitleAlign: "center",
          headerBackTitleVisible: false,
          headerTitleStyle: {
            color: colors.lightContrast,
            fontSize: 20,
          },
          contentStyle: {
            backgroundColor: colors.lightContrast,
          },
          headerStyle: {
            backgroundColor: colors.darkContrast,
          },
          headerTintColor: colors.lightContrast,
        }}
      />
      <Text style={styles.body}>{capitalizeFirstLetter(body as string)}</Text>
    </View>
  );
};

export default PostDetailsPage;

import React, { useEffect } from "react";
import { View, Text, StyleProp, ViewStyle, TextStyle } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import globalStyles from "./themes/globalStyles";
import { Provider } from "react-redux";
import { store } from "./state/store";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

const headerCopy = "My posts";

const CustomHeader = () => (
  <View style={{ ...globalStyles.header.wrapper } as StyleProp<ViewStyle>}>
    <Text
      style={
        {
          ...globalStyles.header.title,
        } as StyleProp<TextStyle>
      }
    >
      {headerCopy}
    </Text>
  </View>
);

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Stack>
          <Stack.Screen
            name="(posts)"
            options={{
              headerTransparent: true,
              header: CustomHeader,
            }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
      </Provider>
    </QueryClientProvider>
  );
}

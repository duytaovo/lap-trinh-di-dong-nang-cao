/* eslint-disable react/react-in-jsx-scope */
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import Routes from "./src/routes";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NativeBaseProvider>
        <NavigationContainer>
          <SafeAreaProvider style={{ flex: 1 }}>
            <StatusBar style="auto" />
            <Routes />
          </SafeAreaProvider>
        </NavigationContainer>
      </NativeBaseProvider>
    </GestureHandlerRootView>
  );
}


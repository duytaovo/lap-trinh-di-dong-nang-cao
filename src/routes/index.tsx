import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import TabNavigation from "./TabNavigation";
import IntroScreen from "../screens/Intro/IntroScreen";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
  const navigation = useNavigation<any>();
  useEffect(() => {
    // Đợi 10 giây và sau đó chuyển đến trang chính (HomeScreen)
    const timer = setTimeout(() => {
      // Thực hiện navigation tới trang chính
      navigation.navigate("Home");
      // console.log("Navigate to HomeScreen");
      // navigation.navigate("Home");
    }, 10000);

    // Clear timeout khi component unmount
    return () => clearTimeout(timer);
  }, []);
  return (
    <Stack.Navigator initialRouteName="Intro">
      <Stack.Screen
        name="Intro"
        component={IntroScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Routes;


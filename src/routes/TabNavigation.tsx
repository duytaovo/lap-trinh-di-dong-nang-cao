import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Icon } from "@rneui/themed";
import React from "react";
import { TABS, ICON_HOME, COLORS } from "../constants";
import HomeScreen from "../screens/home/HomeScreen";

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName={TABS.home}>
      <Tab.Screen
        name={TABS.home}
        options={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.primary,
        }}
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;


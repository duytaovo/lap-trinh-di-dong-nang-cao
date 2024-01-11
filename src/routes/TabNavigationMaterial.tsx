import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Icon } from "@rneui/themed";
import React from "react";
import { COLORS, ICON_HOME, TABS } from "../constants";
import HomeScreen from "../screens/home/HomeScreen";

const Tab = createMaterialBottomTabNavigator();

const TabNavigationMaterial: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName={TABS.home}
      activeColor={COLORS.primary}
      inactiveColor={COLORS.text}
      barStyle={{ backgroundColor: COLORS.white }}
    >
      <Tab.Screen
        name={TABS.home}
        options={{
          tabBarColor: COLORS.white,
          // tabBarIcon: ({ focused }) => (
          //   <Icon
          //     {...ICON_HOME(focused)}
          //     color={focused ? COLORS.primary : COLORS.text}
          //   />
          // ),
        }}
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigationMaterial;


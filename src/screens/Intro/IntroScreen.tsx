import React, { useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

import { COLORS } from "../../constants";

const HomeScreen: React.FC = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        Hello 👋. I'm Võ Duy Tạo. MERN Developer, Open Source Enthusiast 🔥.
        Always learning.
      </Text>
      <Text style={styles.description}>
        Web Development ⚡ Develop highly interactive Front end / User
        Interfaces for your web and mobile applications ⚡ Building responsive
        website front end using ReactJS ⚡ Developing mobile applications using
        React Native and Android ⚡ Creating application backend in Node,
        Express & Flask ⚡ Integration of third party services such as Firebase/
        AWS / Digital Ocean
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    // Add more styling for the container if needed
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    // Add more styling for the greeting if needed
  },
  description: {
    fontSize: 16,
    color: COLORS.text,
    // Add more styling for the description if needed
  },
});

export default HomeScreen;


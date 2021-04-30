import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../../config/colors";

function MenuBody({
  color1 = colors.gray,
  color2 = colors.lightGray,
  icon,
  title = "Titulo",
  onpress,
}) {
  return (
    <TouchableWithoutFeedback onPress={onpress}>
      <LinearGradient style={styles.container} colors={[color1, color2]}>
        <Image style={{ width: 90, height: 90 }} source={icon}></Image>
        <Text style={styles.title}>{title}</Text>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

export default MenuBody;

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 140,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 23,
    fontWeight: "400",
  },
});

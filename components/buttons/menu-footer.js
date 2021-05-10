import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../config/colors";
import defaultStyles from "../../config/styles";

function MenuFooter({
  color1 = colors.gray,
  color2 = colors.lightGray,
  icon,
  title = "Titulo",
  onpress,
  otroEstiloTexto,
}) {
  return (
    <TouchableWithoutFeedback onPress={onpress}>
      <LinearGradient style={styles.container} colors={[color1, color2]}>
        <Image style={{ width: 28, height: 28 }} source={icon}></Image>
        <Text
          numberOfLines={2}
          style={[defaultStyles.text, styles.title, otroEstiloTexto]}
        >
          {title}
        </Text>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

export default MenuFooter;

const styles = StyleSheet.create({
  container: {
    width: 115,
    height: 35,
    backgroundColor: colors.rojoClaro,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 4,
  },
  title: {
    fontSize: 13,
    fontWeight: "500",
  },
});

import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../config/colors";
import defaultStyles from "../../config/styles";

function AracIndivPicada() {
  return (
    <TouchableWithoutFeedback>
      <LinearGradient
        colors={[colors.verdeOscuro, colors.verdeClaro]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={styles.container}
      >
        <Text style={[defaultStyles.text, styles.label]}>
          ¿Te pico{"\n"} este aracnido?
        </Text>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}
export default AracIndivPicada;

const styles = StyleSheet.create({
  container: {
    width: 145,
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  label: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "400",
  },
});

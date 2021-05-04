import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../config/colors";

function AracIndivPicada() {
  return (
    <TouchableWithoutFeedback>
      <LinearGradient
        colors={[colors.verdeOscuro, colors.verdeClaro]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={styles.container}
      >
        <Text style={styles.label}>¿Te pico{"\n"} este aracnido?</Text>
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
    marginHorizontal: 5,
  },
  label: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "400",
  },
});

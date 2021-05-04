import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../config/colors";

function AracIndivAvist() {
  return (
    <TouchableWithoutFeedback>
      <LinearGradient
        colors={[colors.rojoOscuro, colors.rojoClaro]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={styles.container}
      >
        <Text style={styles.label}>¿Has visto {"\n"} este aracnido?</Text>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}
export default AracIndivAvist;

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
    color: colors.white,
    textAlign: "center",
    fontWeight: "400",
  },
});

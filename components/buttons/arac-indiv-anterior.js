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

function AracIndivAnterior({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <LinearGradient
        colors={[colors.amarilloOscuro, colors.amarilloClaro2]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={styles.container}
      >
        <Image
          source={require("../../assets/icons/right-arrow.png")}
          style={styles.icon}
        />
        <Text style={[defaultStyles.text, styles.label]}>Anterior</Text>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}
export default AracIndivAnterior;

const styles = StyleSheet.create({
  container: {
    width: 145,
    height: 40,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  label: { fontSize: 21 },
  icon: { width: 33, resizeMode: "contain", transform: [{ rotate: "180deg" }] },
});

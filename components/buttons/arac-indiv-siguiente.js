import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../config/colors";

function AracIndivSiguiente({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <LinearGradient
        colors={[colors.amarilloOscuro, colors.amarilloClaro2]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={styles.container}
      >
        <Text style={styles.label}>Siguiente</Text>
        <Image
          source={require("../../assets/icons/right-arrow.png")}
          style={styles.icon}
        />
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}
export default AracIndivSiguiente;

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
  icon: { width: 33, resizeMode: "contain" },
});

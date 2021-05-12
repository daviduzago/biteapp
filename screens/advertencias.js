import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../config/colors";
import defaultStyles from "../config/styles";
import routes from "../navigation/routes";

function Advertencias({ navigation }) {
  return (
    <LinearGradient
      style={styles.container}
      colors={[colors.verdeClaro, colors.verdeOscuro]}
      start={{ x: 0, y: 0 }}
      finish={{ x: 1, y: 1 }}
    >
      {/* Icono */}
      <View style={styles.icono}>
        <Image
          style={styles.icono__icon}
          source={require("../assets/icons/warning.png")}
        />
      </View>

      {/* Mensaje */}
      <View style={styles.mensaje__body}>
        <Text style={[defaultStyles.text, styles.mensaje__body__title]}>
          Advertencias
        </Text>
        <Text style={[defaultStyles.text, styles.mensaje__body__text]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Text>
      </View>
      {/* Boton */}
      <View style={styles.boton__box}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate(routes.MENU_PRINCIPAL);
          }}
        >
          <Image
            style={{ width: 90, height: 90, marginTop: 20 }}
            source={require("../assets/icons/next.png")}
          />
        </TouchableWithoutFeedback>
      </View>
    </LinearGradient>
  );
}

export default Advertencias;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icono: {
    flex: 0.9 / 3,
    justifyContent: "flex-end",
  },
  icono__icon: { width: 100, height: 100, marginBottom: 20 },
  mensaje__body: {
    flex: 1.2 / 3,
    width: "75%",
    height: "100%",
    backgroundColor: colors.white,
    borderRadius: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 5,
  },
  mensaje__body__title: { fontSize: 30, marginBottom: 10 },
  mensaje__body__text: { fontSize: 15, textAlign: "center" },
  boton__box: { flex: 0.9 / 3 },
});

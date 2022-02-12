import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";
import { ScrollView } from "react-native-gesture-handler";

function AcercaDe() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.header__logo}
          source={require("../assets/biteApp_vertical.png")}
        ></Image>
      </View>
      <LinearGradient
        colors={[colors.white, colors.verdeClaro, colors.white]}
        style={styles.greenLine}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
      ></LinearGradient>
      <Text style={{ color: colors.medium, fontSize: 13, fontWeight: "300" }}>
        Aplicación desarrollada por
      </Text>
      <View style={styles.header2}>
        <Image
          style={styles.image_university}
          source={require("../assets/usco.png")}
        />
        <Image
          style={styles.image_university}
          source={require("../assets/corhuila.png")}
        />
      </View>
      <Text style={{ color: colors.medium, fontSize: 13, fontWeight: "300" }}>
        Investigadores y Co-Investigadores
      </Text>
      <View style={styles.investigadores_body}>
        <View style={styles.investigadores_column}>
          <Text style={styles.investigadores_text_bold}>David Urrego</Text>
          <Text style={styles.investigadores_text_normal}>
            Desarrollador Móvil
          </Text>
          <Text style={styles.investigadores_text_bold}>David Urrego</Text>
          <Text style={styles.investigadores_text_normal}>
            Desarrollador Móvil
          </Text>
        </View>
        <View style={styles.investigadores_column}>
          <Text style={styles.investigadores_text_bold}>Oscar</Text>
          <Text style={styles.investigadores_text_normal}>
            Desarrollador Web
          </Text>
          <Text style={styles.investigadores_text_bold}>Oscar</Text>
          <Text style={styles.investigadores_text_normal}>
            Desarrollador Web
          </Text>
        </View>
      </View>
    </View>
  );
}

export default AcercaDe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  header: {
    width: "100%",
    flex: 1 / 4,
    justifyContent: "center",
    alignItems: "center",
  },
  header2: {
    width: "100%",
    flex: 1 / 4,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  header__logo: {
    width: "80%",
    resizeMode: "contain",
  },
  investigadores_body: {
    flex: 2 / 4,
    height: "100%",
    width: "100%",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  investigadores_column: {
    width: "40%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    paddingVertical: 20,
  },
  investigadores_text_bold: {
    color: colors.medium,
    fontWeight: "bold",
  },
  investigadores_text_normal: {
    color: colors.medium,
    marginBottom: 15,
  },
  image_university: {
    width: 110,
    resizeMode: "contain",
  },
  greenLine: {
    flex: 0.016 / 4,
    width: "90%",
    marginBottom: 10,
  },
});

import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuBody from "../components/buttons/menu-body";
import MenuFooter from "../components/buttons/menu-footer";
import colors from "../config/colors";

export default function Menu() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          style={styles.header__logo}
          source={require("../assets/icon.png")}
        ></Image>
      </View>
      <LinearGradient
        colors={[colors.white, colors.verdeClaro, colors.white]}
        style={styles.greenLine}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0 }}
      ></LinearGradient>
      {/* Body */}
      <View style={styles.body}>
        <View style={styles.body__row}>
          <MenuBody
            title={"Categorias"}
            icon={require("../assets/icons/books.png")}
            color1={colors.verdeOscuro}
            color2={colors.verdeClaro}
            onpress={() => {
              navigation.navigate("Categorias");
            }}
          />
          <MenuBody
            title={"Guias"}
            icon={require("../assets/icons/guide.png")}
            color1={colors.naranjaOscuro}
            color2={colors.naranjaClaro}
          />
        </View>
        <View style={styles.body__row}>
          <MenuBody
            title="Quizzes"
            icon={require("../assets/icons/quiz.png")}
            color1={colors.amarilloOscuro}
            color2={colors.amarilloClaro}
          />
          <MenuBody
            title={"Sabias que..."}
            icon={require("../assets/icons/idea.png")}
            color1={colors.azulOscuro}
            color2={colors.azulClaro}
          />
        </View>
      </View>
      {/* Emergencias */}
      <View style={styles.emergency}>
        <LinearGradient
          style={styles.emergency__boton}
          colors={[colors.rojoClaro, colors.rojoOscuro]}
        >
          <Image
            style={styles.emergency__boton__icon}
            source={require("../assets/icons/emergency-call.png")}
          ></Image>
          <Text style={styles.emergency__boton__title}>Emergencias</Text>
        </LinearGradient>
      </View>
      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footer__twoButtons}>
          <MenuFooter
            title={"Acerca de"}
            icon={require("../assets/icons/team.png")}
            color1={colors.beigeClaro}
            color2={colors.beigeOscuro}
          />
          <TouchableWithoutFeedback>
            <LinearGradient
              style={styles.footer__twoButtons__button}
              colors={[colors.azulOscuro2, colors.azulOscuro2]}
            >
              <Text
                numberOfLines={1}
                style={{ fontSize: 10, fontWeight: "500", color: colors.white }}
              >
                Politica de privacidad
              </Text>
            </LinearGradient>
          </TouchableWithoutFeedback>
          <Text style={{ fontSize: 10, color: "gray", marginLeft: 5 }}>
            BiteApp v1.0
          </Text>
        </View>
        {/* Camara */}
        <LinearGradient
          style={styles.footer__camara}
          colors={[colors.verdeOscuro, colors.verdeClaro]}
        >
          <Image
            style={styles.footer__camara__icon}
            source={require("../assets/icons/camera.png")}
          />
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 0.6 / 4,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  header__logo: {
    width: 80,
    height: 80,
  },
  greenLine: {
    flex: 0.016 / 4,
    width: "90%",
  },
  body: {
    flex: 2.3 / 4,
    width: "100%",
    justifyContent: "space-evenly",
  },
  body__row: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 18,
  },
  body__boton: {
    width: 140,
    height: 140,
    backgroundColor: colors.naranjaOscuro,
    borderRadius: 20,
  },
  emergency: {
    flex: 0.4 / 4,
    width: "98%",
    justifyContent: "center",
    alignItems: "center",
  },
  emergency__boton: {
    flexDirection: "row",
    width: "84%",
    height: "100%",
    backgroundColor: colors.rojoClaro,
    borderRadius: 10,
    justifyContent: "space-between",
    paddingHorizontal: 25,
    alignItems: "center",
  },
  emergency__boton__icon: {
    width: 50,
    height: 50,
  },
  emergency__boton__title: {
    fontSize: 35,
    fontWeight: "500",
    color: colors.white,
  },
  footer: {
    flex: 1 / 4,
    width: "100%",
    flexDirection: "row",
    paddingRight: 40,
    paddingLeft: 35,
    justifyContent: "space-between",
    alignItems: "center",
  },
  footer__twoButtons: {
    width: 120,
    height: 90,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  footer__twoButtons__button: {
    width: 115,
    height: 30,
    backgroundColor: colors.rojoClaro,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  footer__camara: {
    width: 100,
    height: 100,
    backgroundColor: colors.azulOscuro2,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  footer__camara__icon: {
    width: 60,
    height: 60,
  },
});
